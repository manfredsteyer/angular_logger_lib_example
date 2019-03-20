import { LogFormatter } from './log-formatter';
import { DefaultLogFormatter } from './log-formatter';
import { LoggerConfig } from './logger.config';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogMonitorComponent } from './log-monitor.component';
import { LogAppender, DefaultLogAppender, LOG_APPENDERS } from './log-appender';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LogMonitorComponent
  ],
  // providers: [
  //   LoggerService
  // ],
  exports: [
    LogMonitorComponent
  ]
})
export class LoggerModule {

  static forRoot(config: LoggerConfig, formatter = DefaultLogFormatter): ModuleWithProviders {

    return {
      ngModule: LoggerModule,
      providers: [
        {provide: LoggerConfig, useValue: config},
        {provide: LogFormatter, useClass: formatter },
        {
          provide: LOG_APPENDERS,
          useClass: DefaultLogAppender,
          multi: true
        }
      ]
    };
  }

}
