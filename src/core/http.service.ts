export class Http {
  static get(aUrl: string): Promise<any> {
    return new Promise((aResolve, aReject) => {
      const theRequest = new XMLHttpRequest();
      theRequest.open('get', aUrl);
      theRequest.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          try {
            const theResult = JSON.parse(theRequest.response);
            aResolve(theResult);
          } catch (aError) {
            aReject({ status: this.status, error: `Could not parse JSON: "${theRequest.response}"` });
          }
        } else {
          aReject({ status: this.status, error: this.statusText });
        }
      };
      theRequest.onerror = function () {
        aReject({ status: this.status, error: this.statusText });
      };

      theRequest.send();
    });
  }
}
