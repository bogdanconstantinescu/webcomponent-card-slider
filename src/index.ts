import './components';
import './assets/styles.scss';

import { BaseComponent } from './components';

(() => {
  class RootComponent extends BaseComponent {
    static Selector = 'app-root';

    constructor() {
      super(RootComponent.Selector);
    }

    render(): string {
      return `<card-slider firstProperty="abcd"></card-slider>`;
    }
  }

  customElements.define(RootComponent.Selector, RootComponent);
})();
