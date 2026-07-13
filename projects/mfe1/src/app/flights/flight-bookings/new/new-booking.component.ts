import { Component } from '@angular/core';

@Component({
  selector: 'app-new-booking',
  standalone: true,
  template: `
    <h3>New Booking</h3>
    <form class="booking-form">
      <div>
        <label for="passenger">Passenger Name:</label>
        <input id="passenger" type="text" placeholder="Full name">
      </div>
      <div>
        <label for="from">From:</label>
        <input id="from" type="text" placeholder="Departure city">
      </div>
      <div>
        <label for="to">To:</label>
        <input id="to" type="text" placeholder="Arrival city">
      </div>
      <div>
        <label for="date">Date:</label>
        <input id="date" type="date">
      </div>
      <div>
        <label for="class">Class:</label>
        <select id="class">
          <option value="economy">Economy</option>
          <option value="business">Business</option>
          <option value="first">First Class</option>
        </select>
      </div>
      <button type="button" (click)="book()">Book Flight</button>
    </form>
  `,
  styles: [`
    .booking-form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 350px;
    }
    label {
      display: block;
      margin-bottom: 4px;
      font-weight: bold;
    }
    input, select {
      padding: 8px;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      padding: 10px 20px;
      background: darkred;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }
    button:hover {
      background: #8b0000cc;
    }
  `]
})
export class NewBookingComponent {
  book(): void {
    alert('Booking confirmed! (Demo only)');
  }
}
