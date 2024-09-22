import { ILibraryFunctions, ISound } from '@local/shared-interfaces';
import { ipcRenderer } from 'electron';

const list = async (): Promise<ISound[]> => {
  return ipcRenderer.invoke('library:list');
};

const add = async (item: ISound): Promise<ISound> => {
  return ipcRenderer.invoke('library:add', item);
};

const remove = async (path: string): Promise<void> => {
  await ipcRenderer.invoke('library:remove', path);
};

export default {
  list,
  add,
  remove,
} as ILibraryFunctions;
