import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IconComponent } from '../lib/components/icon/icon.component';

const meta: Meta = {
  title: 'Style/Navigation menu',
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  decorators: [moduleMetadata({ imports: [IconComponent] })],
  render: (args: any) => ({
    template: `
<ul class="uc-navigation-menu">
  <li class="uc-navigation-menu-item"><a href="#" class="uc-button"><uc-icon name="home"></uc-icon> Home</a></li>
  <li class="uc-navigation-menu-item"><a href="#" class="uc-button"><uc-icon name="activity"></uc-icon> Services</a></li>
  <li class="uc-navigation-menu-item"><a href="#" class="uc-button"><uc-icon name="package"></uc-icon> Products</a></li>
  <li class="uc-navigation-menu-item"><a href="#" class="uc-button"><uc-icon name="mail"></uc-icon> Contact</a></li>
  <li class="uc-navigation-menu-item"><a href="#" class="uc-button"><uc-icon name="help-circle"></uc-icon> About</a></li>
</ul>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
};
