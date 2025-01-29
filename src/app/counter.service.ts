import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  // BehaviorSubject to hold the counter value (initial value is 0)
  private counterSubject = new BehaviorSubject<number>(0);

  // Expose the Observable for components to subscribe to
  counter$ = this.counterSubject.asObservable();

  // Method to increment the counter
  increment() {
    this.counterSubject.next(this.counterSubject.value + 1);
  }

  // Method to decrement the counter
  decrement() {
    this.counterSubject.next(this.counterSubject.value - 1);
  }

  // Method to reset the counter
  reset() {
    this.counterSubject.next(0);
  }
}
