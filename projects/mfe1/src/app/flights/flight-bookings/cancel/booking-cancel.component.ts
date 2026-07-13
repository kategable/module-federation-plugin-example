import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-cancel',
  standalone: true,
  template: `
    <h3>Cancel Booking</h3>
    <div class="cancel-card">
      <p><strong>Booking ID:</strong> {{ bookingId }}</p>
      <p class="warning">Are you sure you want to cancel this booking?</p>
      <p>Cancellation fees may apply depending on your fare class and timing.</p>
      <div class="actions">
        <button class="btn-cancel" (click)="confirmCancel()">Yes, Cancel Booking</button>
        <button class="btn-back" (click)="goBack()">No, Go Back</button>
      </div>
    </div>
  `,
  styles: [`
    .cancel-card {
      padding: 20px;
      border: 1px solid #f5c6cb;
      border-radius: 8px;
      background: #fff5f5;
      max-width: 400px;
    }
    .warning {
      color: #721c24;
      font-weight: bold;
    }
    .actions {
      display: flex;
      gap: 12px;
      margin-top: 16px;
    }
    .btn-cancel {
      padding: 8px 16px;
      background: #dc3545;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .btn-back {
      padding: 8px 16px;
      background: #6c757d;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class BookingCancelComponent {
  bookingId = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.bookingId = params['id'] || 'N/A';
    });
  }

  confirmCancel(): void {
    alert('Booking cancelled! (Demo only)');
  }

  goBack(): void {
    history.back();
  }
}
