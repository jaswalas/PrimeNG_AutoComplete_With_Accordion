import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'accordion-demo';
  pizzaSelection: any;

  selectedCountry: any;

  countries: any[];

  filteredCountries: any[];

  selectedCountries: any[];

  selectedCountryAdvanced: any[];

  filteredBrands: any[];

  searchedText: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCountries().then(countries => {
      this.countries = countries;
    });
  }

  filterCountry(event) {
    /*in a real application, make a request to a remote url with the query and 
    return filtered results, for demo we filter at client side*/
    let filtered: any[] = [];
    let query = event.query;
    this.searchedText = query;
    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      let searchedText = country.textFile &&
        country.textFile.filter(x => x.file.toLowerCase().includes(query.toLowerCase()));
      if (searchedText && searchedText.length > 0) {
        filtered.push(country);
      }
      // if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      //     filtered.push(country);
      // }
    }

    this.filteredCountries = filtered;
  }


  onTabClose(e) {
    var index = e.index;
    e.originalEvent.stopPropagation();
  }

  onTabOpen(e) {
    var index = e.index;
    e.originalEvent.stopPropagation();
  }

  txtFileSelected() {
    alert('item is clicked');
  }

}
