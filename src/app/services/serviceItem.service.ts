import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ServiceItem } from './interfaces/service-item';
import serviceItemListMockData from '../data/serviceItemList.json';

@Injectable({
  providedIn: 'root',
})
export class ServiceItemService {
  constructor() {}

  public fetchDeviceList(): Observable<ServiceItem[]> {
    return of(serviceItemListMockData);
  }

}
