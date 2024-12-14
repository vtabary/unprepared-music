import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Style/Typography',
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  render: (args: any) => ({
    template: `
<h1 class="uc-header-1">Header 1</h1>
<h2 class="uc-header-2">Header 2</h2>
<h3 class="uc-header-3">Header 3</h3>
<h4 class="uc-header-4">Header 4</h4>
<p>Paragraph</p>
`,
  }),
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
};
