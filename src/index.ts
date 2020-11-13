import './components';
import { BaseComponent } from './components';

function component() {
  const theElement = document.createElement('div');
  theElement.innerHTML = 'Hello webpackss';
  return theElement;
}

(() => {
  class RootComponent extends BaseComponent {
    template: `<div><card-slider></card-slider></div>`;

    constructor() {
      super();
      console.warn('root');
    }
  }

  customElements.define('app-root', RootComponent);
})();

// document.body.appendChild(component());
