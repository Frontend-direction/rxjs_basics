import { of } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

const stream$ = of({name: 'Vova', age: 30}, {name: 'Lesia'});

stream$.pipe(
  map(val => val?.name)
).subscribe(console.log)

// stream$.pipe(
//   pluck('name')
// ).subscribe(console.log)

// stream$.pipe(
//   mapTo('hello person!')
// ).subscribe(console.log);