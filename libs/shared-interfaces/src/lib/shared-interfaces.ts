export interface ISound {
  path: string;
  tags: string[];
  label: string;
  type: 'sound' | 'music';
  duration: number;
}

export interface ILibraryFunctions {
  list(filePath: string): Promise<ISound[]>;
  create(directoryPath: string, projectName: string): Promise<string>;
  add(
    item: Pick<ISound, 'path' | 'type'> &
      Partial<Pick<ISound, 'label' | 'tags'>>,
    filePath: string
  ): Promise<ISound>;
  remove(path: string, filePath: string): Promise<void>;
}

export interface IAudioFunctions {
  getMetadata(path: string): Promise<{
    duration?: number;
    label?: string;
    tags: string[];
  }>;
}

export interface IFileFunctions {
  open(accept: { name: string; extensions: string[] }[]): Promise<string[]>;
  openDirectory(): Promise<string[]>;
}
