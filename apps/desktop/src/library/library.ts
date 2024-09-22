import { ISound } from '@local/shared-interfaces';
import { ipcMain, net, protocol } from 'electron';
import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';
import { pathToFileURL } from 'url';

const readLibrary = async (): Promise<ISound[]> => {
  const content = await readFile(
    './apps/ui/src/assets/sounds/list.json',
    'utf-8'
  );
  return JSON.parse(content) as ISound[];
};

const saveLibrary = async (items: ISound[]): Promise<void> => {
  await writeFile(
    './apps/ui/src/assets/sounds/list.json',
    JSON.stringify(items, undefined, 2),
    'utf-8'
  );
};

const removeLibraryItem = (items: ISound[], path: string): ISound[] => {
  const index = items.findIndex((item) => item.path === path);
  if (index < 0) {
    return;
  }
  items.splice(index, 1);
  return items;
};

protocol.registerSchemesAsPrivileged([
  {
    scheme: 'test',
    privileges: {
      // standard: true,
      // secure: true,
      supportFetchAPI: true,
      stream: true,
    },
  },
]);

export const importLibraryHooks = () => {
  ipcMain.handle('library:list', async () => readLibrary());

  ipcMain.handle('library:add', async (event, item: ISound) => {
    const library = await readLibrary();

    library.push(item);
    saveLibrary(library);
  });

  ipcMain.handle('library:remove', async (event, path: string) => {
    const library = await readLibrary();
    const result = removeLibraryItem(library, path);
    saveLibrary(result);
  });

  protocol.handle('local', (request) => {
    const filePath = request.url.slice('local://'.length);
    return net.fetch(pathToFileURL(resolve(filePath)).toString());
  });
};
