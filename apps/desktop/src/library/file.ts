import { IFileFunctions } from '@local/shared-interfaces';
import { dialog, ipcMain } from 'electron';

const open: IFileFunctions['open'] = async (
  accept: { name: string; extensions: string[] }[]
): Promise<string[]> => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    filters: accept,
  });
  if (!canceled) {
    return filePaths;
  }

  return [];
};

const openDirectory: IFileFunctions['openDirectory'] = async (): Promise<
  string[]
> => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ['openDirectory'],
  });
  if (!canceled) {
    return filePaths;
  }

  return [];
};

export const importFileHooks = () => {
  ipcMain.handle(
    'file:open',
    (event, accept: { name: string; extensions: string[] }[]) => open(accept)
  );

  ipcMain.handle('file:openDirectory', (event) => openDirectory());
};
