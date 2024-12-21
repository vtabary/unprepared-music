import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { IconComponent } from '../icon/icon.component';
import { ButtonComponent } from './button.component';

export const ActionsData = {
  onClickButton: fn(),
  text: 'Some content',
  title: 'Some content',
  level: 'primary' as 'primary' | 'secondary' | 'default' | 'text',
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
    props: { ...args },
    template: `<uc-button
      [title]="title"
      [level]="level"
      [size]="size"
      [display]="display"
      [disabled]="disabled"
    >{{ text }}</uc-button>`,
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Default: Story = {
  name: 'Medium',
  args: {},
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const WithIcon: Story = {
  decorators: [
    moduleMetadata({
      imports: [IconComponent],
    }),
  ],
  render: (args) => ({
    props: { ...args },
    template: `<uc-button
      [title]="title"
      [level]="level"
      [size]="size"
      [display]="display"
      [disabled]="disabled"
    >{{ text }}<uc-icon name="package"></uc-icon></uc-button>`,
  }),
};

export const IconOnly: Story = {
  decorators: [
    moduleMetadata({
      imports: [IconComponent],
    }),
  ],
  render: (args) => ({
    props: { ...args },
    template: `<uc-button
      [title]="title"
      [level]="level"
      [size]="size"
      [display]="display"
      [disabled]="disabled"
    ><uc-icon name="package"></uc-icon></uc-button>`,
  }),
};
