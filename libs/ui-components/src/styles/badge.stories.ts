import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IconComponent } from '../lib/components/icon/icon.component';

const meta: Meta = {
  title: 'Style/Badge',
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  decorators: [moduleMetadata({ imports: [IconComponent] })],
  render: (args: any) => ({
    template: `
<span class="uc-badge">Badge</span><br/>
<span class="uc-badge"><uc-icon name="package"></uc-icon> Badge</span><br/>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
};
