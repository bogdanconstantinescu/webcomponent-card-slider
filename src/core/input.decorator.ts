export function Input() {
  return function (aTarget: any, aKey: string) {
    if (aKey?.includes('-')) {
      throw new Error('@Input() property names must not include "-".');
    }

    const get = function (this: HTMLElement) {
      return this.getAttribute(aKey);
    };

    const set = function (this: any, aValue: any) {
      if (this.getAttribute(aKey) !== aValue) {
        delete this[aKey];
        this.setAttribute(aKey, aValue);
        this[aKey] = aValue;
        this.detectChanges(this);
      }
    };

    Object.defineProperty(aTarget, aKey, {
      get,
      set,
      enumerable: true,
      configurable: true
    });
  };
}
