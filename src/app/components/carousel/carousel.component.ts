import { Component, HostListener, OnInit } from '@angular/core';
import { ServiceItem } from 'src/app/services/interfaces/service-item';
import { ServiceItemService } from 'src/app/services/serviceItem.service';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  faChevronRight = faChevronRight;
  faChevronLeft= faChevronLeft;
  serviceItems: ServiceItem[] = [];
  itemsVisible: number = 5;
  currentSlide = 2;

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
    } else if (windowWidth >= 640 && windowWidth <= 1024) {
      this.itemsVisible = 3;
    } else if (windowWidth > 1024) {
      this.itemsVisible = 5;
    }
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.serviceItems.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.serviceItems.length ? 0 : next;
  }
}
