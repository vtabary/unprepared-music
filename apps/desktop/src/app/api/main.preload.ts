import { contextBridge, ipcRenderer } from 'electron';
import audio from './audio';
import file from './file';
import library from './library';

contextBridge.exposeInMainWorld('electron', {
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  platform: process.platform,
});

contextBridge.exposeInMainWorld('file', file);
contextBridge.exposeInMainWorld('library', library);
contextBridge.exposeInMainWorld('audio', audio);
