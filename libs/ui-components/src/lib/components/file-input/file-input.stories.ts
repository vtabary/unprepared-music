import type { Meta, StoryObj } from '@storybook/angular';

import { FileInputComponent } from './file-input.component';

export const ActionsData = {
  accept: [{ name: 'Audio files', extensions: ['mp3', 'wav'] }],
};

const meta: Meta<FileInputComponent> = {
  title: 'Components/File input',
  component: FileInputComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
    ...ActionsData,
  },
};

export default meta;
type Story = StoryObj<FileInputComponent>;

export const Default: Story = {
  args: {},
};
