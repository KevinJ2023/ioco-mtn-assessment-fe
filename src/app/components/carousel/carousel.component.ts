import { Component, OnInit, HostListener } from '@angular/core';
import { ServiceItem } from 'src/app/services/interfaces/service-item';
import { ServiceItemService } from 'src/app/services/serviceItem.service';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-carousel',
  exportAs: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  serviceItems: ServiceItem[] = [];
  itemsVisible: number = 5;
  currentSlide: number = 0;

  constructor(private serviceItemService: ServiceItemService) {}

  ngOnInit(): void {
    this.serviceItemService.fetchDeviceList().subscribe(
      (response) => {
        this.serviceItems = response;
      },
      (error) => {
        console.error(error);
      }
    );
    this.updateScreenSize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateScreenSize(window.innerWidth);
  }

  updateScreenSize(windowWidth: number) {
    if (windowWidth < 640) {
      this.itemsVisible = 1;
      this.currentSlide = 0;
    } else if (windowWidth >= 640 && windowWidth <= 1024) {
      this.itemsVisible = 3;
      this.currentSlide = 1;
    } else if (windowWidth > 1024) {
      this.itemsVisible = 5;
      this.currentSlide = 2;
    }
  }

  arrayRotate(arr: any, reverse?: boolean) {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
  }

  onPreviousClick() {
    this.arrayRotate(this.serviceItems, true);
  }

  onNextClick() {
    this.arrayRotate(this.serviceItems, false);
  }
}
