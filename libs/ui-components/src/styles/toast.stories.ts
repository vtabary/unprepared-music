import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IconComponent } from '../lib/components/icon/icon.component';

const meta: Meta = {
  title: 'Style/Toast',
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 200,
      },
    },
  },
  decorators: [moduleMetadata({ imports: [IconComponent] })],
  render: (args: any) => ({
    template: `
<div class="uc-toast">
    <div class="uc-toast-header">
      <h4>Some main message</h4>
    </div>
    <div class="uc-toast-content">
      Some additional information
    </div>
    <div class="uc-toast-action">
      <button type="button" class="uc-button uc-button--primary">Action</button>
    </div>
</div>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  name: 'With action',
  args: {},
  render: (args: any) => ({
    template: `
<div class="uc-toast">
  <div class="uc-toast-column">
    <div class="uc-toast-header">
      <h4>Some main message</h4>
    </div>
    <div class="uc-toast-content">
      Some additional information
    </div>
  </div>
  <div class="uc-toast-column">
    <div class="uc-toast-action">
      <button type="button" class="uc-button uc-button--primary">Action</button>
    </div>
  </div>
</div>
    `,
  }),
};

export const Simple: Story = {
  args: {},
  render: (args: any) => ({
    template: `
<div class="uc-toast">
  <div class="uc-toast-content">
    <div class="uc-toast-column">
      Some additional information
    </div>
  </div>
</div>
    `,
  }),
};

export const WithTitle: Story = {
  args: {},
  render: (args: any) => ({
    template: `
<div class="uc-toast">
  <div class="uc-toast-column">
    <div class="uc-toast-header">
      <h4>Some very long message for the title property and the size of the toast</h4>
    </div>
    <div class="uc-toast-content">
      Some additional information
    </div>
  </div>
</div>
    `,
  }),
};

export const WithLongContent: Story = {
  args: {},
  render: (args: any) => ({
    template: `
<div class="uc-toast">
  <div class="uc-toast-column">
    <div class="uc-toast-header">
      <h4>Some very long message for the title property and the size of the toast</h4>
    </div>
    <div class="uc-toast-content">
      Some very long description of what could be wrong or right before the toast appears.
    </div>
  </div>
  <div class="uc-toast-column">
    <div class="uc-toast-action">
      <button type="button" class="uc-button uc-button--primary">Some long action</button>
    </div>
  </div>
</div>
    `,
  }),
};
