import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  // Current counter value
  counterValue: number = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    // Subscribe to the counter Observable
    this.counterService.counter$.subscribe((value) => {
      this.counterValue = value; // initializing value here => one of the functions of ngOnInit(){}
    });
  }

  // Methods to interact with the counter
  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }

  reset() {
    this.counterService.reset();
  }
}
