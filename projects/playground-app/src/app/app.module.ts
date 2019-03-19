import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoggerModule } from '@my/logger-lib';
import { LoggerConfig } from 'projects/logger-lib/src/lib/logger.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoggerModule
  ],
  providers: [
    { provide: LoggerConfig, useValue: { enableDebug: true }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
