import { Component, Input, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() selected!: boolean;
  @Input() serviceItemImage!: string; 
  @Input() serviceItemTagline!: string;
  @Input() serviceItemTitle!: string;
  @Input() serviceItemCTAText!: string;
  @Input() serviceItemCTAURL!: string;

  faChevronRight = faChevronRight;

  constructor() { }

  ngOnInit(): void {
  }

}
