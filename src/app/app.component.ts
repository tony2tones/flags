import { Component } from '@angular/core';
import { Country } from './model/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flags';
  // always use typeScript never any..or at least try to 
  countries: Country[] = [
    {
      name: "South Africa",
      code: "za",
    },
    {
      name: "France",
      code: "fr",
    },
    {
      name: "Switzerland",
      code: "ch",
    },
    {
      name: "Greece",
      code: "gr",
    },
    {
      name: "Netherlands",
      code: "nl",
    },
    {
      name: "Germany",
      code: "de",
    },
  ];
}
