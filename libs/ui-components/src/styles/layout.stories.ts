import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IconComponent } from '../lib/components/icon/icon.component';
import { LayoutColumnComponent } from '../lib/components/layout-column/layout-column.component';

const meta: Meta = {
  title: 'Style/Layout',
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  decorators: [
    moduleMetadata({
      imports: [LayoutColumnComponent, IconComponent],
    }),
  ],
  render: (args: any) => ({
    template: `
<div class="uc-layout">
  <uc-layout-column [grow]="20">
    <h1 class="uc-header-1 p-2" ucColumnHeader>Column 1</h1>
    <div ucColumnContent class="p-2">My menu</div>
  </uc-layout-column>
  <div class="uc-layout-vertical-separator"></div>
  <uc-layout-column [grow]="48">
    <div class="p-1 grow" ucColumnHeader>
      <div class="uc-input--with-prefixed-icon">
        <uc-icon name="search" class="uc-input-prefixed-icon"></uc-icon>
        <input type="search" class="uc-input" placeholder="Input type search" />
      </div>
    </div>
    <div ucColumnContent class="p-1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum nunc vel nibh efficitur elementum. Quisque aliquet, ex id finibus dignissim, dolor ipsum fermentum sapien, id varius orci arcu at tortor. Nulla turpis magna, rhoncus in ultrices vitae, rhoncus eu enim. Donec accumsan turpis justo, non tristique mauris eleifend a. Fusce cursus dictum hendrerit. Nulla sodales turpis sit amet orci varius commodo. Duis fermentum mi at arcu mollis feugiat. Curabitur non arcu vel purus efficitur convallis. Sed pulvinar nulla ipsum, at eleifend sem porta at. Fusce libero est, rhoncus at enim non, pulvinar tincidunt urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et fringilla massa, in commodo felis. Donec diam massa, tempus pulvinar ligula vel, dictum tincidunt tortor. Duis elementum nunc orci, nec ornare nulla sollicitudin id. Maecenas volutpat felis nisi, non malesuada elit fringilla eu. </div>
  </uc-layout-column>
  <div class="uc-layout-vertical-separator"></div>
  <uc-layout-column [grow]="32">
    <h1 class="uc-header-1 p-2" ucColumnHeader>Column 3</h1>
    <div ucColumnContent class="p-2">
      <form>
        <input class="uc-input" type="text" placeholder="Search..." /><br/>
        <uc-button type="submit">Submit</uc-button>
      </form>
    </div>
  </uc-layout-column>
</div>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
};
