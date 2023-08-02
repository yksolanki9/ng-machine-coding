import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ratingsForm!: FormGroup;

  ngOnInit() {
    this.ratingsForm = new FormGroup({
      rating: new FormControl<number | null>(null, Validators.required),
    });
  }

  saveForm() {
    this.ratingsForm.markAllAsTouched();
    if (this.ratingsForm.valid) {
      console.log('FORM VALUE IS', this.ratingsForm.value);
    }
  }
}
