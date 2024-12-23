import { ISound } from '@local/shared-interfaces';
import { ipcMain, net, protocol } from 'electron';
import { readFile, writeFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { pathToFileURL } from 'url';

const readLibrary = async (filePath: string): Promise<ISound[]> => {
  const content = await readFile(filePath, 'utf-8');
  return JSON.parse(content) as ISound[];
};

const saveLibrary = async (
  items: ISound[],
  filePath: string
): Promise<void> => {
  await writeFile(filePath, JSON.stringify(items, undefined, 2), 'utf-8');
};

const removeLibraryItem = (items: ISound[], path: string): ISound[] => {
  const index = items.findIndex((item) => item.path === path);
  if (index < 0) {
    return;
  }
  items.splice(index, 1);
  return items;
};

const convertPath = (itemPath: string, cwd: string): string => {
  if (/^\w:\/\/.*/.test(itemPath)) {
    return itemPath;
  }
  return pathToFileURL(resolve(cwd, itemPath))
    .toString()
    .replace(/^file:/, 'local:');
};

protocol.registerSchemesAsPrivileged([
  {
    scheme: 'local',
    privileges: {
      // standard: true,
      // secure: true,
      supportFetchAPI: true,
      stream: true,
    },
  },
]);

export const importLibraryHooks = () => {
  ipcMain.handle('library:list', async (event, filePath: string) =>
    readLibrary(filePath)
  );

  ipcMain.handle(
    'library:create',
    async (event, directoryPath: string, projectName: string) => {
      const projectPath = resolve(directoryPath, `${projectName}.json`);
      await saveLibrary([], projectPath);
      return projectPath;
    }
  );

  ipcMain.handle(
    'library:add',
    async (event, item: ISound, filePath: string) => {
      const library = await readLibrary(filePath);

      library.push({
        ...item,
        path: convertPath(item.path, dirname(filePath)),
      });
      saveLibrary(library, filePath);
    }
  );

  ipcMain.handle(
    'library:remove',
    async (event, path: string, filePath: string) => {
      const library = await readLibrary(filePath);
      const result = removeLibraryItem(library, path);
      saveLibrary(result, filePath);
    }
  );

  protocol.handle('local', (request) => {
    const filePath = request.url.replace(/^local:\/\//, 'file://');
    return net.fetch(filePath);
  });
};
