import type { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';

export const ActionsData = {
  name: 'repeat',
  title: 'Some content',
};

const meta: Meta<IconComponent> = {
  title: 'Components/Icon',
  component: IconComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
    ...ActionsData,
  },
  argTypes: {},
  render: (args: any) => ({
    template: `
<h1 class="uc-header-1">Header with icon <uc-icon
  title="${args.title}"
  name="${args.name}"
></uc-icon></h1>
<h2 class="uc-header-2">Header with icon <uc-icon
  title="${args.title}"
  name="${args.name}"
></uc-icon></h2>
<h3 class="uc-header-3">Header with icon <uc-icon
  title="${args.title}"
  name="${args.name}"
></uc-icon></h3>
<h4 class="uc-header-4">Header with icon <uc-icon
  title="${args.title}"
  name="${args.name}"
></uc-icon></h4>
<p>Paragraph with icon <uc-icon
  title="${args.title}"
  name="${args.name}"
></uc-icon></p>
`,
  }),
};

export default meta;
type Story = StoryObj<IconComponent>;

/**
 * Default story for the icon component
 */
export const Default: Story = {
  args: {},
};
