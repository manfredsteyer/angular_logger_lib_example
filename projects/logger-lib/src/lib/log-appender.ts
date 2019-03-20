import { InjectionToken } from "@angular/core";

export type LogLevel = 'DEBUG' | 'LOG';

export const LOG_APPENDERS = new InjectionToken('LOG_APPENDERS');

export abstract class LogAppender {
  abstract append(logLevel: string, msg: string);
}

export class DefaultLogAppender implements LogAppender {
  append(logLevel: LogLevel, msg: string) {
    if (logLevel === 'DEBUG') {
      console.debug(msg);
    }
    else {
      console.log(msg);
    }
  }
}
