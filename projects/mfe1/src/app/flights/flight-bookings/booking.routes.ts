import { Routes } from '@angular/router';
import { UpcomingBookingsComponent } from './upcoming/upcoming-bookings.component';
import { BookingHistoryComponent } from './history/booking-history.component';
import { BookingDetailComponent } from './detail/booking-detail.component';
import { NewBookingComponent } from './new/new-booking.component';
import { BookingCheckinComponent } from './checkin/booking-checkin.component';
import { BookingCancelComponent } from './cancel/booking-cancel.component';

export const BOOKING_ROUTES: Routes = [
  { path: '', redirectTo: 'upcoming', pathMatch: 'full' },
  { path: 'upcoming', component: UpcomingBookingsComponent },
  { path: 'history', component: BookingHistoryComponent },
  { path: 'new', component: NewBookingComponent },
  {
    path: ':id',
    component: BookingDetailComponent,
    children: [
      { path: 'checkin', component: BookingCheckinComponent },
      { path: 'cancel', component: BookingCancelComponent },
    ],
  },
];
