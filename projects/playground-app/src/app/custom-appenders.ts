import { LogAppender } from "@my/logger-lib";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomLogAppender implements LogAppender {
  append(logLevel: string, msg: string) {
    let str = localStorage.getItem('log') || '';
    str += msg + '\n';
    localStorage.setItem('log', str);
  }

}
