import { interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const count1$ = interval(1000);
const interval2$ = interval(5000);

count1$.pipe(
  takeUntil(interval2$)
).subscribe(console.log)