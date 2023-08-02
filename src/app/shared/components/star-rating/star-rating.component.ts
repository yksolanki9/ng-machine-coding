import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingComponent),
      multi: true,
    },
  ],
})
export class StarRatingComponent implements OnInit, ControlValueAccessor {
  @Input() numStars = 5;

  stars: Array<number> = [];

  selectedRating: number | null = null;

  private onChanged = (_: number) => {};

  private onTouched = () => {};

  ngOnInit() {
    this.stars = Array.from(Array(this.numStars));
  }

  starSelected(index: number) {
    this.selectedRating = index;
    this.onTouched();
    console.log('this.selectedRating', this.selectedRating);
    this.onChanged(index);
  }

  //Write data from the formgroup to this control
  writeValue(obj: any): void {
    console.log('OBJECY IS', obj);
    this.selectedRating = obj;
  }

  //Registers changes in this control inside the formgroup
  registerOnChange(fn: (_: number) => void): void {
    this.onChanged = fn;
  }

  //Registers touch actions on this control
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
