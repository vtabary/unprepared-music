import { IAudioFunctions } from '@local/shared-interfaces';
import { ipcMain } from 'electron';
import { parseFile } from 'music-metadata';
import { basename, extname } from 'path';

const getMetadata: IAudioFunctions['getMetadata'] = async (
  path: string
): Promise<{
  duration?: number;
  label?: string;
  tags: string[];
}> => {
  const metadata = await parseFile(path);

  return {
    duration: metadata.format.duration,
    label: metadata.common.title ?? basename(path, extname(path)),
    tags: [...(metadata.common.genre ?? [])].filter((item) => !!item),
  };
};

export const importAudioHooks = () => {
  ipcMain.handle('audio:metadata', (event, path: string) => getMetadata(path));
};
