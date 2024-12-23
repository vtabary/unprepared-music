import { ILibraryFunctions, ISound } from '@local/shared-interfaces';
import { ipcRenderer } from 'electron';

const list = async (filePath: string): Promise<ISound[]> => {
  return ipcRenderer.invoke('library:list', filePath);
};

const create = async (
  directoryPath: string,
  projectName: string
): Promise<string> => {
  return ipcRenderer.invoke('library:create', directoryPath, projectName);
};

const add = async (item: ISound, filePath: string): Promise<ISound> => {
  return ipcRenderer.invoke('library:add', item, filePath);
};

const remove = async (path: string, filePath: string): Promise<void> => {
  await ipcRenderer.invoke('library:remove', path, filePath);
};

export default {
  list,
  add,
  remove,
  create,
} as ILibraryFunctions;
