import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const stream$ = of({name: 'Vova', age: 30}, {name: 'Lesia'});


stream$.pipe(
  map(person => person.name),
  filter(name => name !== 'Vova')
).subscribe(console.log);