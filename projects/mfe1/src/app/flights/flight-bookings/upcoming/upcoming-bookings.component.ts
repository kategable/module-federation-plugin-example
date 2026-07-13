import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-bookings',
  standalone: true,
  template: `
    <h3>Upcoming Flights</h3>
    <ul class="booking-list">
      <li>
        <strong>NYC → LON</strong>
        <span>July 20, 2026 - 10:30 AM</span>
        <span class="status confirmed">Confirmed</span>
      </li>
      <li>
        <strong>LON → PAR</strong>
        <span>Aug 5, 2026 - 2:15 PM</span>
        <span class="status pending">Pending</span>
      </li>
    </ul>
  `,
  styles: [`
    .booking-list {
      list-style: none;
      padding: 0;
    }
    .booking-list li {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 12px;
      border-bottom: 1px solid #eee;
    }
    .status {
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
    }
    .confirmed { background: #d4edda; color: #155724; }
    .pending { background: #fff3cd; color: #856404; }
  `]
})
export class UpcomingBookingsComponent {}
