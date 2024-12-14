import type { Meta, StoryObj } from '@storybook/angular';

import { ChipsComponent } from './chips.component';

export const ActionsData = {
  text: 'Some content',
};

const meta: Meta<ChipsComponent> = {
  title: 'Components/Chips',
  component: ChipsComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
    ...ActionsData,
  },
  render: (args: any) => ({
    template: `<uc-chips
    >${args.text}</uc-chips>`,
  }),
};

export default meta;
type Story = StoryObj<ChipsComponent>;

export const Default: Story = {
  args: {},
};
