import { LOG_APPENDERS } from './../../../logger-lib/src/lib/log-appender';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { LoggerModule } from '@my/logger-lib';

import { LoggerConfig } from 'projects/logger-lib/src/lib/logger.config';
import { CustomLogFormatter } from './custom-log-formatter';
import { CustomLogAppender } from './custom-appenders';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoggerModule.forRoot({ enableDebug: true }, CustomLogFormatter)
  ],
  providers: [
    {
      provide: LOG_APPENDERS,
      useClass: CustomLogAppender,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
