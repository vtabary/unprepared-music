import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IconComponent } from '../lib/components/icon/icon.component';

const meta: Meta = {
  title: 'Style/Input',
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  decorators: [moduleMetadata({ imports: [IconComponent] })],
  render: (args: any) => ({
    template: `
<form action="#" method="GET" class="flex flex-col gap-2">
  <input type="text" class="uc-input" placeholder="Input type text" />
  <input type="number" class="uc-input" placeholder="Input type number" />
  <div class="uc-input--with-prefixed-icon">
    <uc-icon name="search" class="uc-input-prefixed-icon"></uc-icon>
    <input type="search" class="uc-input" placeholder="Input type search" />
  </div>
  <textarea class="uc-input" placeholder="Text area"></textarea>
  <button type="submit" class="uc-button uc-button--primary">Button</button>
</form>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
};
