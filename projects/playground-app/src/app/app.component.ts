import { Component } from '@angular/core';

import { LoggerService } from '@my/logger-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private logger: LoggerService) {
    logger.debug('Manfred was here!! You have been haaaacked');
    logger.log('Application started!');
  }
}
