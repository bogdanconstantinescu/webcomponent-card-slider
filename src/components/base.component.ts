export abstract class BaseComponent extends HTMLElement {
  static Selector: string;
  protected elementContainer: ShadowRoot;
  protected domElement: HTMLElement;

  protected constructor(aSelector: string) {
    super();

    this.elementContainer = this.attachShadow({ mode: 'open' });
    this.domElement = document.createElement('div');
    this.domElement.classList.add(aSelector);
  }

  connectedCallback() {
    this.onInit();
  }

  onInit() {
    console.warn('render', this.render());
    this.domElement.innerHTML = this.render();
    this.elementContainer.appendChild(this.domElement);
  }

  abstract render(): string;
}
