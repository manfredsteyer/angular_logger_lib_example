import { Injectable, Inject } from '@angular/core';
import { LoggerConfig } from './logger.config';
import { LogFormatter } from './log-formatter';
import { LogAppender, LOG_APPENDERS } from './log-appender';

@Injectable({
  providedIn: 'root'
  // providedIn: LazyModule
})
export class LoggerService {

  constructor(
    @Inject(LOG_APPENDERS) private logAppenders: LogAppender[],
    private formatter: LogFormatter,
    private config: LoggerConfig) {
  }

  debug(message: string): void {
    if (this.config && !this.config.enableDebug) {
      return;
    }

    for(const a of this.logAppenders) {
      // tslint:disable-next-line:no-console
      a.append('DEBUG', this.formatter.format(message));
    }
  }

  log(message: string): void {
    // tslint:disable-next-line:no-console
    for(const a of this.logAppenders) {
      // tslint:disable-next-line:no-console
      a.append('LOG', this.formatter.format(message));
    }
  }

}
