import { BaseComponent } from './base.component';
import './slider.component.scss';
import { Card, Data } from '../core';

export class CardComponent extends BaseComponent {
  static Selector = 'image-card';

  @Data() card: Card;

  constructor() {
    super(CardComponent.Selector);
  }

  addListeners() {
  }

  hasImage(): boolean {
    return !!this.card;
  }

  getImageUrl(): string {
    return `${this.card?.image_url}?i=${ Math.random() }` ?? undefined;
  }

  render() {
    return `
      ${ this.hasImage() ? `<img src="${ this.getImageUrl() }" />` : '<div class="noimg"></div>' }
      <div class="image-card-header">
        <img src="img/icon.png" />
          <div>
            <h1>${ this.card?.title }</h1>
            <h2>${ this.card?.subtitle }</h2>
          </div>          
      </div>
      <div class="image-card-body">
        <p>${ this.card?.text }</p>
        <a href="https://gohenry.com/uk">Learn More</a>
      </div>
    `;
  }
}
