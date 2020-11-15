import { BaseComponent } from './base.component';
import { Card, Data, Input } from '../core';
import './slider.component.scss';

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

  addListeners() {
    this.listen('left', 'click', this.onLeftClick);
    this.listen('right', 'click', this.onRightClick);
    this.getElement(CardSlider).style.maxWidth = `${this.getContainerWidth(this.numberOfCards, cardWidth, cardSpace)}px`;
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

  render() {
    return `
      <div class="slider-container" ref="${CardSlider}">
        <div class="overflow" ref="${CardOverflow}">
          ${ this.cards?.map(c => `<image-card></image-card>`).join('') }
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
