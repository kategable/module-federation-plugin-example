import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightBookingsComponent } from './flight-bookings/flight-bookings.component';
import { BOOKING_ROUTES } from './flight-bookings/booking.routes';

export const FLIGHT_ROUTES: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: FlightSearchComponent },
  {
    path: 'bookings',
    component: FlightBookingsComponent,
    children: BOOKING_ROUTES,
  },
];
