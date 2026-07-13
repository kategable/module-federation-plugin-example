import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-booking-detail',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <h3>Booking Detail</h3>
    <div class="detail-card">
      <p><strong>Booking ID:</strong> {{ bookingId }}</p>
      <p><strong>Route:</strong> NYC → LON</p>
      <p><strong>Date:</strong> July 20, 2026</p>
      <p><strong>Passenger:</strong> John Doe</p>
      <p><strong>Seat:</strong> 14A (Window)</p>
      <p><strong>Status:</strong> <span class="status confirmed">Confirmed</span></p>
    </div>
    <nav class="detail-nav">
      <a routerLink="checkin" routerLinkActive="active">Check-In</a>
      <a routerLink="cancel" routerLinkActive="active">Cancel</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .detail-card {
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      max-width: 400px;
    }
    .detail-card p {
      margin: 8px 0;
    }
    .status {
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
    }
    .confirmed { background: #d4edda; color: #155724; }
    .detail-nav {
      margin-top: 16px;
      margin-bottom: 16px;
    }
    .detail-nav a {
      text-decoration: none;
      padding: 8px 16px;
      color: #333;
      font-weight: 500;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-right: 8px;
    }
    .detail-nav a.active {
      color: white;
      background: darkred;
      border-color: darkred;
    }
  `]
})
export class BookingDetailComponent {
  bookingId = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.bookingId = params['id'] || 'N/A';
    });
  }
}
