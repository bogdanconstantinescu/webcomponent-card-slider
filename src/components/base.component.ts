export abstract class BaseComponent extends HTMLElement {
  static Selector: string;

  protected elementContainer: any;
  protected domElement: HTMLElement;
  protected data: { [key: string]: any } = {};
  private selector: string;
  private listeners: { [key: string]: any } = {};

  protected constructor(aSelector: string) {
    super();

    this.selector = aSelector;
    this.elementContainer = this;
    this.domElement = document.createElement('div');
    this.domElement.classList.add(aSelector);
  }

  connectedCallback() {
    this.onInit();
  }

  disconnectedCallback() {
    this.onDestroy();
  }

  onInit() {
    this.domElement.innerHTML = this.render();
    this.elementContainer.appendChild(this.domElement.cloneNode(true));
    this.addListeners();
  }

  abstract addListeners(): void;

  onDestroy() {
    this.removeListeners();
  }

  abstract render(): string;

  detectChanges(aElement: HTMLElement) {
    this.removeListeners();
    this.querySelector(`.${this.selector}`).innerHTML = this.render();
    this.addListeners();
  }

  getElement(aKey: string): HTMLElement {
    return this.querySelector(`[ref="${aKey}"]`);
  }

  listen(aKey: string, aEvent: string, aCallback: any) {
    this.listeners[`${aKey}:${aEvent}`] = aCallback;
    this.getElement(aKey)?.addEventListener(aEvent as any, aCallback);
  }

  private removeListeners() {
    Object.keys(this.listeners).forEach((aKey: string) => {
      const [ theRef, theEvent ] = aKey.split(':');
      this.getElement(theRef)?.removeEventListener(theEvent, this.listeners[aKey]);
      delete this.listeners[aKey];
    });
  }
}
