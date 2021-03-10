import { Component } from '@angular/core';
import { DateTimeService } from './date-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'current-date';
  currentDate: String;

  constructor(private dateTimeService: DateTimeService) {
    this.currentDate = this.dateTimeService.getDateTime().toLocaleString();
  }
}
