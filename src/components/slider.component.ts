import { BaseComponent } from './base.component';

export class SliderComponent extends BaseComponent {
  template: 'haha - aici';

  constructor() {
    super();
    console.warn('aici');
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('my component is connected!');
  }
}
