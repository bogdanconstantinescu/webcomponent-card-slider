import { CardComponent } from './card.component';
import { SliderComponent } from './slider.component';

customElements.define(CardComponent.Selector, CardComponent);
customElements.define(SliderComponent.Selector, SliderComponent);

export * from './base.component';
export * from './card.component.scss';
export * from './slider.component';
