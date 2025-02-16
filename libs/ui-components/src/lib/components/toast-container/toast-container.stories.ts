import { Component, Input } from '@angular/core';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ToastService } from '../../services/toast/toast.service';
import { ToastContainerComponent } from './toast-container.component';

@Component({
  selector: 'uc-toast-component',
  template: `<button class="uc-button" (click)="generateToast()">
    <ng-content></ng-content>
  </button>`,
})
export class ToastTestComponent {
  @Input({ required: true })
  public message = 'Some content';

  @Input()
  public title?: string;

  @Input()
  public action?: string;

  private index = 0;

  constructor(private readonly toast: ToastService) {}

  public generateToast() {
    this.toast
      .show({
        message: `${this.message} (${this.index++})`,
        action: this.action ?? '',
        title: this.title,
      })
      .action?.subscribe(() => {
        alert('Action clicked');
      });
  }
}

const meta: Meta<ToastContainerComponent> = {
  title: 'Components/Toast container',
  component: ToastContainerComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  decorators: [
    moduleMetadata({
      imports: [ToastTestComponent],
    }),
  ],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 200,
      },
    },
  },
  render: (args: any) => ({
    props: {
      ...args,
    },
    template: `
      <uc-toast-component>Default Toast</uc-toast-component><br/>
      <uc-toast-component title="Some title">With title</uc-toast-component><br/>
      <uc-toast-component action="Some action">With action</uc-toast-component><br/>
      <uc-toast-component title="Some title" action="Some action">With action and title</uc-toast-component><br/>
      <uc-toast-container></uc-toast-container>
    `,
  }),
};

export default meta;
type Story = StoryObj<ToastContainerComponent>;

export const Default: Story = {
  args: {},
};
