import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DurationPipe } from './duration.pipe';

export const ActionsData = {
  value: 376,
};

const meta: Meta = {
  title: 'Pipes/Duration',
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [DurationPipe],
    }),
  ],
  render: (args: any) => ({
    props: args,
    template: `<div>{{ value | duration }}</div>`,
  }),
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    value: 376,
  },
};
