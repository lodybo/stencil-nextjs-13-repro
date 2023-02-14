import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() primary: boolean;
  render() {
    return (
      <Host>
        <button class={{
          'button': true,
          'primary': this.primary,
        }}>
          <slot></slot>
        </button>
      </Host>
    );
  }

}
