import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-flight-bookings',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <h2>My Bookings</h2>
    <nav class="bookings-nav">
      <a routerLink="upcoming" routerLinkActive="active">Upcoming</a>
      <a routerLink="history" routerLinkActive="active">History</a>
      <a routerLink="new" routerLinkActive="active">New Booking</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .bookings-nav {
      margin-bottom: 16px;
      border-bottom: 1px solid #ddd;
      padding-bottom: 8px;
    }
    .bookings-nav a {
      text-decoration: none;
      padding: 8px 16px;
      color: #333;
      font-weight: 500;
    }
    .bookings-nav a.active {
      color: darkred;
      border-bottom: 2px solid darkred;
    }
  `]
})
export class FlightBookingsComponent {}
