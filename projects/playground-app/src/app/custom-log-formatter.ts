import { LogFormatter } from '@my/logger-lib';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomLogFormatter implements LogFormatter {
  format(msg: string): string {
    return `[${new Date().toISOString()}] ${msg}`;
  }

}
