import './components';
import './assets/styles.scss';

import { BaseComponent, SliderComponent } from './components';
import { Card } from './core';

(() => {
  class RootComponent extends BaseComponent {
    static Selector = 'app-root';
    cards: Card[] = [];

    constructor() {
      super(RootComponent.Selector);

      this.cards = [
        {
          "id": 1,
          "title": "We are Humans",
          "subtitle": "What will you find here",
          "text": "We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.",
          "image_url": "http://lorempixel.com/300/150/"
        },
        {
          "id": 2,
          "title": "We work together",
          "subtitle": "What will you find here",
          "text": "We insist on working collaborativelly. <strong>No rockstars</strong>. No departments. The whole owns the whole project together.",
          "image_url": "http://lorempixel.com/300/150/"
        },
        {
          "id": 1,
          "title": "We are Humans",
          "subtitle": "What will you find here",
          "text": "We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.",
          "image_url": "http://lorempixel.com/300/150/"
        },
        {
          "id": 2,
          "title": "We work together",
          "subtitle": "What will you find here",
          "text": "We insist on working collaborativelly. <strong>No rockstars</strong>. No departments. The whole owns the whole project together.",
          "image_url": "http://lorempixel.com/300/150/"
        },
        {
          "id": 1,
          "title": "We are Humans",
          "subtitle": "What will you find here",
          "text": "We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.",
          "image_url": "http://lorempixel.com/300/150/"
        },
        {
          "id": 2,
          "title": "We work together",
          "subtitle": "What will you find here",
          "text": "We insist on working collaborativelly. <strong>No rockstars</strong>. No departments. The whole owns the whole project together.",
          "image_url": "http://lorempixel.com/300/150/"
        },
      ];
    }

    onInit() {
      super.onInit();
      (this.getElement('slider1') as SliderComponent).cards = this.cards;
      (this.getElement('slider2') as SliderComponent).cards = this.cards;
    }

    addListeners() {
    }

    render(): string {
      return `
        <div class="container">
          <card-slider numberOfCards="3" ref="slider1"></card-slider>
          <card-slider numberOfCards="4" ref="slider2"></card-slider>
        </div>
      `;
    }
  }

  customElements.define(RootComponent.Selector, RootComponent);
})();
