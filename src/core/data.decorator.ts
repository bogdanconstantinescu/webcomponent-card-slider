import { BaseComponent } from '../components';

export function Data() {
  return function (aTarget: any, aKey: string) {
    const getKey = (aKey: string) => {
      return `__${aKey}`;
    }

    const get = function(this: BaseComponent) {
      return this.data[getKey(aKey)];
    };

    const set = function (this: BaseComponent, aValue: any) {
      if (this.data[getKey(aKey)] !== aValue) {
        this.data[getKey(aKey)] = aValue;
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
