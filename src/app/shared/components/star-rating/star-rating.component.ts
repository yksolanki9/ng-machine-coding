import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  @Input() numStars = 5;

  stars: Array<number> = [];

  selectedRating: number = -1;

  ngOnInit() {
    this.stars = Array.from(Array(this.numStars));
  }

  starSelected(index: number) {
    this.selectedRating = index;
  }
}
