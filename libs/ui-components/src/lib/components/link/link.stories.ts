import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { LinkComponent } from './link.component';

export const ActionsData = {
  text: 'Some link',
  title: 'Some title',
  url: 'https://google.fr',
  level: 'primary' as 'primary' | 'secondary' | 'default' | 'text',
  groupOn: 'default' as 'default' | 'left' | 'right' | 'both',
  size: 'medium' as 'small' | 'medium' | 'large',
  display: 'button' as 'button' | 'text',
  disabled: false,
};

const meta: Meta<LinkComponent> = {
  title: 'Components/Link',
  component: LinkComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
    ...ActionsData,
  },
  argTypes: {
    level: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'default', 'text'],
    },
    groupOn: {
      control: {
        type: 'select',
      },
      options: ['default', 'left', 'right', 'both'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    display: {
      control: { type: 'select' },
      options: ['button', 'text'],
    },
  },
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(RouterModule.forRoot([]))],
    }),
  ],
  render: (args: any) => ({
    template: `<uc-link
      title="${args.title}"
      level="${args.level}"
      groupOn="${args.groupOn}"
      size="${args.size}"
      display="${args.display}"
      [disabled]="${args.disabled}"
    >${args.text}</uc-link>`,
  }),
};

export default meta;
type Story = StoryObj<LinkComponent>;

export const Default: Story = {
  args: {},
};
