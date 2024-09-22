export interface ISound {
  path: string;
  tags: string[];
  label: string;
  type: 'sound' | 'music';
  duration: number;
}

export interface ILibraryFunctions {
  list(): Promise<ISound[]>;
  add(
    item: Pick<ISound, 'path' | 'type'> &
      Partial<Pick<ISound, 'label' | 'tags'>>
  ): Promise<ISound>;
  remove(path: string): Promise<void>;
}

export interface IAudioFunctions {
  getMetadata(path: string): Promise<{
    duration?: number;
    label?: string;
    tags: string[];
  }>;
}

export interface IFileFunctions {
  open(accept: string): Promise<string[]>;
}
