import { BaseComponent } from './base.component';
import './slider.component.scss';

export class CardComponent extends BaseComponent {
  static Selector = 'image-card';

  constructor() {
    super(CardComponent.Selector);
  }

  addListeners() {
    this.listen('left', 'click', this.onLeftClick);
    this.listen('right', 'click', this.onRightClick);
  }

  onLeftClick = () => {
    console.warn('click on the left');
  };

  onRightClick = () => {
    console.warn('click on the right');
  };

  render() {
    return `
        <img src="https://picsum.photos/300/150/" />
        <div class="image-card-header">
            <img src="img/icon.png" />
            <div>
                <h1>We are Humans</h1>
                <h2>What will you find here</h2>
            </div>          
        </div>
        <div class="image-card-body">
            <p>We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.</p>
            <a href="https://gohenry.com/uk">Learn More</a>
        </div>
    `;
  }
}
