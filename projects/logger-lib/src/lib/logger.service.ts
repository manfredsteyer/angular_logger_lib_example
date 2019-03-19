import { Injectable } from '@angular/core';
import { LoggerConfig } from './logger.config';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private config: LoggerConfig) {
  }

  debug(message: string): void {
    if (this.config && !this.config.enableDebug) {
      return;
    }
    // tslint:disable-next-line:no-console
    console.debug(message);
  }

  log(message: string): void {
    // tslint:disable-next-line:no-console
    console.debug(message);
  }

}
