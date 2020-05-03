import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  handleError(error: any): void {

    console.log("Error occured: " + error.message);
    const chunkFailedMessage = /Loading chunk [\d]+ failed/;

      if (chunkFailedMessage.test(error.message)) {
          console.log("Loading chunk .. failed error so reloading window to  force app to reload to load the new fresh chunks");
        window.location.reload(true);
      }
    }
  }