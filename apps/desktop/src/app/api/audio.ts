import { IAudioFunctions } from '@local/shared-interfaces';
import { ipcRenderer } from 'electron';

const getMetadata = async (
  path: string
): Promise<{
  label?: string;
  tags: string[];
  duration?: number;
}> => {
  return ipcRenderer.invoke('audio:metadata', path);
};

export default {
  getMetadata,
} as IAudioFunctions;
