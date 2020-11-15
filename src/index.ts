import './components';
import './assets/styles.scss';

import { BaseComponent, SliderComponent } from './components';
import { Card, Http } from './core';

(() => {
  class RootComponent extends BaseComponent {
    static Selector = 'app-root';

    constructor() {
      super(RootComponent.Selector);
    }

    onInit() {
      super.onInit();

      Http.get('http://localhost:3000/cards').then((aResult: Card[]) => {
        const theResult = aResult.map((aCard: Card) => {
          return { ...aCard, image_url: 'https://picsum.photos/300/150' };
        });

        (this.getElement('slider1') as SliderComponent).cards = theResult?.slice(0, 6);
        (this.getElement('slider2') as SliderComponent).cards = theResult?.slice(0, 8);
      });
    }

    addListeners() {
    }

    render(): string {
      return `
        <div class="container">
          <card-slider numberOfCards="3" ref="slider1"></card-slider>
          <card-slider numberOfCards="3" ref="slider2"></card-slider>
        </div>
      `;
    }
  }

  customElements.define(RootComponent.Selector, RootComponent);
})();
