import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-history',
  standalone: true,
  template: `
    <h3>Past Flights</h3>
    <ul class="booking-list">
      <li>
        <strong>SFO → TYO</strong>
        <span>Jan 10, 2026</span>
        <span class="status completed">Completed</span>
      </li>
      <li>
        <strong>TYO → SFO</strong>
        <span>Jan 20, 2026</span>
        <span class="status completed">Completed</span>
      </li>
      <li>
        <strong>LAX → SEA</strong>
        <span>Dec 1, 2025</span>
        <span class="status cancelled">Cancelled</span>
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
    .completed { background: #d4edda; color: #155724; }
    .cancelled { background: #f8d7da; color: #721c24; }
  `]
})
export class BookingHistoryComponent {}
