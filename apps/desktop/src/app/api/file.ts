import { IFileFunctions } from '@local/shared-interfaces';
import { ipcRenderer } from 'electron';

const open = async (
  accept: { name: string; extensions: string[] }[]
): Promise<string[]> => {
  return ipcRenderer.invoke('file:open', accept);
};

export default {
  open,
} as IFileFunctions;
