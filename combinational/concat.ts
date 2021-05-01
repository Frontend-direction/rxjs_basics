import { of, concat, interval } from 'rxjs';
import { delay, take } from 'rxjs/operators';

const interval$ = interval(1000);

const numbers$ = of(1,2,3);

concat(
  interval$.pipe(take(3)),
  interval$.pipe(take(2)),
).subscribe(console.log)