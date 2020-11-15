import { BaseComponent } from './base.component';
import { Card, Data, Input } from '../core';
import './slider.component.scss';
import { CardComponent } from './card.component';

const cardWidth = 316;
const cardSpace = 26;
const CardSlider = 'slider';
const CardOverflow = 'overflow';

export class SliderComponent extends BaseComponent {
  static Selector = 'card-slider';

  @Data() cards: Card[];
  @Input() numberOfCards: number;

  constructor() {
    super(SliderComponent.Selector);
  }

  onInit() {
    super.onInit();
  }

  addListeners() {
    this.listen('left', 'click', this.onLeftClick);
    this.listen('right', 'click', this.onRightClick);

    this.getElement(CardSlider).style.maxWidth = `${this.getContainerWidth(this.numberOfCards, cardWidth, cardSpace)}px`;
    this.getCards().forEach((aCard: Card, aIndex: number) => {
      (this.getElement(`card${aIndex}`) as CardComponent).card = aCard;
    });
  }

  onLeftClick = () => {
    const theSlider = this.getElement(CardOverflow);
    let theScrollValue = theSlider.scrollLeft - this.getContainerWidth(this.numberOfCards, cardWidth, cardSpace);
    if (theScrollValue < 0) {
      theScrollValue = 0;
    }
    theSlider.scrollTo({ top: 0, left: theScrollValue, behavior: 'smooth' });
  };

  onRightClick = () => {
    const theSlider = this.getElement(CardOverflow);
    let theScrollValue = theSlider.scrollLeft + this.getContainerWidth(this.numberOfCards, cardWidth, cardSpace);
    if (theScrollValue > theSlider.scrollWidth) {
      theScrollValue = theSlider.scrollWidth;
    }
    theSlider.scrollTo({ top: 0, left: theScrollValue, behavior: 'smooth' });
  };

  getCards(): Card[] {
    return this.cards ?? [];
  }

  render() {
    return `
      <div class="slider-container" ref="${CardSlider}">
        <div class="overflow" ref="${CardOverflow}">
          ${ this.getCards().map((aCard, aIndex) => `<image-card ref="card${aIndex}"></image-card>`).join('') }
        </div>
      </div>
      <div class="actions">
        <div>
          <span class="material-icons caret" ref="left">keyboard_arrow_left</span>
          <span class="material-icons caret" ref="right">keyboard_arrow_right</span>
        </div>
      </div>
    `;
  }

  getContainerWidth(aNumberOfCards: number, aCardWidth: number, aCardSpace: number): number {
    return aNumberOfCards * aCardWidth + (aNumberOfCards - 1) * aCardSpace;
  }
}
