import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../lib/components/button/button.component';

const meta: Meta = {
  title: 'Style/Input',
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  decorators: [moduleMetadata({ imports: [ButtonComponent] })],
  render: (args: any) => ({
    template: `
<form action="#" method="GET">
  <input type="text" class="uc-input" placeholder="Input type text" /><br/>
  <input type="number" class="uc-input" placeholder="Input type number" /><br/>
  <textarea class="uc-input" placeholder="Text area"></textarea><br />
  <uc-button type="submit">Button</uc-button>
</form>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
};
