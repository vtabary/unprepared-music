import { IFileFunctions } from '@local/shared-interfaces';
import { dialog, ipcMain } from 'electron';

const open: IFileFunctions['open'] = async (
  accept: string
): Promise<string[]> => {
  const { canceled, filePaths } = await dialog.showOpenDialog({});
  if (!canceled) {
    return filePaths;
  }

  return [];
};

export const importFileHooks = () => {
  ipcMain.handle('file:open', (event, accept: string) => open(accept));
};
