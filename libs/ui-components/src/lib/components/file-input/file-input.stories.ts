import type { Meta, StoryObj } from '@storybook/angular';

import { FileInputComponent } from './file-input.component';

export const ActionsData = {
  accept: 'audio/*',
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

// export const Pinned: Story = {
//   args: {
//     task: {
//       ...Default.args?.task,
//       state: 'TASK_PINNED',
//     },
//   },
// };

// export const Archived: Story = {
//   args: {
//     task: {
//       ...Default.args?.task,
//       state: 'TASK_ARCHIVED',
//     },
//   },
// };
