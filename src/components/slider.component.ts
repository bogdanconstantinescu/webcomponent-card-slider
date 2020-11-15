import { BaseComponent } from './base.component';
import { Input } from '../core';

export class SliderComponent extends BaseComponent {
  static Selector = 'card-slider';
  @Input() firstProperty: string;

  constructor() {
    super(SliderComponent.Selector);
  }

  onInit() {
    super.onInit();
    console.warn('my component is connected!');
    console.warn('property', this.firstProperty);
    this.firstProperty = 'testQQ';
    // console.warn('property', this.getAttribute('first-property'));
  }

  render() {
    return `<div>slider component ${this.firstProperty}</div>`;
  }
}
