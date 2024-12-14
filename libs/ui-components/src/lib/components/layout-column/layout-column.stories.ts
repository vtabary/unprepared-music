import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IconComponent } from '../icon/icon.component';
import { LayoutColumnComponent } from './layout-column.component';

const meta: Meta<LayoutColumnComponent> = {
  title: 'Components/Layout column',
  component: LayoutColumnComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  decorators: [
    moduleMetadata({
      imports: [IconComponent],
    }),
  ],
  render: (args: any) => ({
    props: { ...args },
    template: `<div class="uc-layout">
  <uc-layout-column>
    <ng-container ucColumnHeader><div class="p-2"><h1 class="uc-header-1">First column</h1></div></ng-container>
  <div class="layout-horizontal-separator"></div>
    <ng-container ucColumnContent><div class="p-2">First content</div></ng-container>
  </uc-layout-column>
  <div class="uc-layout-vertical-separator"></div>
  <uc-layout-column>
    <ng-container ucColumnHeader>
      <div class="p-2 uc-header-1">
        <uc-icon name="play"></uc-icon>
        <uc-icon name="pause"></uc-icon>
        <uc-icon name="repeat"></uc-icon>
        <uc-icon name="trash"></uc-icon>
      </div></ng-container>
    <ng-container ucColumnContent><div class="p-2">Second content</div></ng-container>
  </uc-layout-column>
</div>`,
  }),
};

export default meta;
type Story = StoryObj<LayoutColumnComponent>;

export const Default: Story = {
  args: {},
};
