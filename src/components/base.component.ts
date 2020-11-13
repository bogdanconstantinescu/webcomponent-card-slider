export abstract class BaseComponent extends HTMLElement {
  abstract template: string;

  connectedCallback() {
    console.warn('template', this.template);
    this.innerHTML = this.template;
  }
}
