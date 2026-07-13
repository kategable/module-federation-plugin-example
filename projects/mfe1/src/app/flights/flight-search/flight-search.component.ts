import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  template: `
    <h2>Flight Search</h2>
    <div class="search-form">
      <div>
        <label for="from">From:</label>
        <input id="from" type="text" placeholder="Departure city">
      </div>
      <div>
        <label for="to">To:</label>
        <input id="to" type="text" placeholder="Arrival city">
      </div>
      <button (click)="search()">Search Flights</button>
    </div>
  `,
  styles: [`
    .search-form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 300px;
    }
    label {
      display: block;
      margin-bottom: 4px;
      font-weight: bold;
    }
    input {
      padding: 8px;
      width: 100%;
      box-sizing: border-box;
    }
    button {
      padding: 8px 16px;
      cursor: pointer;
    }
  `]
})
export class FlightSearchComponent {
  search(): void {
    alert('Search triggered! (Demo only)');
  }
}
