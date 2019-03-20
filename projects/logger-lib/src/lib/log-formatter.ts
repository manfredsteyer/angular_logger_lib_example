import { Injectable } from "@angular/core";

export abstract class LogFormatter {
  abstract format(msg: string): string;
}

@Injectable()
export class DefaultLogFormatter implements LogFormatter {
  format(msg: string): string {
    return msg;
  }
}
