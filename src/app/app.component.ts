import { Component } from '@angular/core';
import { ServiceItem } from './services/interfaces/service-item';
import { ServiceItemService } from './services/serviceItem.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ioco-mtn-assessment-fe';
}
