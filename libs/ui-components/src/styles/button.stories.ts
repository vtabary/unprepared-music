import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IconComponent } from '../lib/components/icon/icon.component';

const meta: Meta = {
  title: 'Style/Button',
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  decorators: [moduleMetadata({ imports: [IconComponent] })],
  render: (args: any) => ({
    template: `
<div class="flex flex-col gap-2 items-start">
  <button type="button" class="uc-button">Default button</button>
  <button type="button" class="uc-button uc-button--primary">Primary button</button>
  <button type="button" class="uc-button uc-button--secondary">Secondary button</button>
  <button type="button" class="uc-button uc-button--ghost">Ghost button</button>
  <button type="button" class="uc-button uc-button--link">Link button</button>
</div>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  args: {},
  render: (args: any) => ({
    template: `
<div class="flex flex-col gap-2 items-start">
  <button type="button" class="uc-button uc-button--primary uc-button--small">Small size</button>
  <button type="button" class="uc-button uc-button--primary">Default/medium size</button>
  <button type="button" class="uc-button uc-button--primary uc-button--large">Large button</button>
</div>
    `,
  }),
};

export const WithIcon: Story = {
  args: {},
  render: (args: any) => ({
    template: `
<div class="flex flex-col gap-2 items-start">
  <button type="button" class="uc-button uc-button--primary uc-button--small"><uc-icon name="package"></uc-icon> Small size</button>
  <button type="button" class="uc-button uc-button--primary"><uc-icon name="package"></uc-icon> Default/medium size</button>
  <button type="button" class="uc-button uc-button--primary uc-button--large"><uc-icon name="package"></uc-icon>Large button</button>
</div>
    `,
  }),
};

export const States: Story = {
  args: {},
  render: (args: any) => ({
    template: `
<div class="flex flex-col gap-2 items-start">
  <button type="button" class="uc-button">Default button</button>
  <button type="button" class="uc-button uc-button--disabled" disabled>Disabled</button>
  <button type="button" class="uc-button uc-button--active">Active</button>

  <button type="button" class="uc-button uc-button--primary">Primary button</button>
  <button type="button" class="uc-button uc-button--primary uc-button--disabled" disabled>Disabled</button>
  <button type="button" class="uc-button uc-button--primary uc-button--active">Active</button>

  <button type="button" class="uc-button uc-button--secondary">Secondary button</button>
  <button type="button" class="uc-button uc-button--secondary uc-button--disabled" disabled>Disabled</button>
  <button type="button" class="uc-button uc-button--secondary uc-button--active">Active</button>

  <button type="button" class="uc-button uc-button--ghost">Ghost button</button>
  <button type="button" class="uc-button uc-button--ghost uc-button--disabled" disabled>Disabled</button>
  <button type="button" class="uc-button uc-button--ghost uc-button--active">Active</button>

  <button type="button" class="uc-button uc-button--link">Link button</button>
  <button type="button" class="uc-button uc-button--link uc-button--disabled" disabled>Disabled</button>
  <button type="button" class="uc-button uc-button--link uc-button--active">Active</button>
</div>
    `,
  }),
};
