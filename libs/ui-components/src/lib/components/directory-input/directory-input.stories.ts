import type { Meta, StoryObj } from '@storybook/angular';

import { DirectoryInputComponent } from './directory-input.component';

export const ActionsData = {};

const meta: Meta<DirectoryInputComponent> = {
  title: 'Components/Directory input',
  component: DirectoryInputComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
    ...ActionsData,
  },
};

export default meta;
type Story = StoryObj<DirectoryInputComponent>;

export const Default: Story = {
  args: {},
};
