import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { ButtonComponent } from './button.component';

export const ActionsData = {
  onClickButton: fn(),
  text: 'Some content',
  title: 'Some content',
  level: 'primary' as 'primary' | 'secondary' | 'default' | 'text',
  groupOn: 'default' as 'default' | 'left' | 'right' | 'both',
  size: 'medium' as 'small' | 'medium' | 'large',
  display: 'button' as 'button' | 'text',
  disabled: false,
};

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
    ...ActionsData,
  },
  argTypes: {
    level: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'default', 'text'],
    },
    groupOn: {
      control: {
        type: 'select',
      },
      options: ['default', 'left', 'right', 'both'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    display: {
      control: { type: 'select' },
      options: ['button', 'text'],
    },
  },
  render: (args: any) => ({
    template: `<unprepared-components-button
      title="${args.title}"
      level="${args.level}"
      groupOn="${args.groupOn}"
      size="${args.size}"
      display="${args.display}"
      [disabled]="${args.disabled}"
    >${args.text}</unprepared-components-button>`,
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

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
