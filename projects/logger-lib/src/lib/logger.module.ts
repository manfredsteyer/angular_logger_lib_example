import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogMonitorComponent } from './log-monitor.component';

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
}
