import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

const count$ = interval(1000);

count$.pipe(
  takeWhile(val => val < 5)
).subscribe(console.log)