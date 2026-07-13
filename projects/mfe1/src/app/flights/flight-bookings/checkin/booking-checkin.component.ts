import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-checkin',
  standalone: true,
  template: `
    <h3>Online Check-In</h3>
    <div class="checkin-card">
      <p><strong>Booking ID:</strong> {{ bookingId }}</p>
      <div class="checkin-form">
        <div>
          <label for="seat">Select Seat:</label>
          <select id="seat">
            <option value="">-- Choose a seat --</option>
            <option value="12A">12A (Window)</option>
            <option value="12B">12B (Middle)</option>
            <option value="12C">12C (Aisle)</option>
            <option value="14A">14A (Window)</option>
            <option value="14B">14B (Middle)</option>
            <option value="14C">14C (Aisle)</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="luggage"> Add extra luggage (23kg)
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" id="meal"> Pre-order meal
          </label>
        </div>
        <button (click)="checkIn()">Complete Check-In</button>
      </div>
    </div>
  `,
  styles: [`
    .checkin-card {
      padding: 20px;
      border: 1px solid #bee5eb;
      border-radius: 8px;
      background: #f0faff;
      max-width: 400px;
    }
    .checkin-form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 12px;
    }
    label {
      display: block;
      margin-bottom: 4px;
      font-weight: 500;
    }
    select {
      padding: 8px;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      padding: 10px 20px;
      background: #0d6efd;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }
    button:hover {
      background: #0b5ed7;
    }
  `]
})
export class BookingCheckinComponent {
  bookingId = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.bookingId = params['id'] || 'N/A';
    });
  }

  checkIn(): void {
    alert('Check-in complete! (Demo only)');
  }
}
