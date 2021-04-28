import { from } from 'rxjs';
import { scan, map } from 'rxjs/operators';


const stream$ = from([{name: 'Vova', age: 30}, {name: 'Lesia'}]);

stream$.pipe(
  scan((acc, curr) => {
    return { ...acc, ...curr as { name: string, age?:number} }
  }, {})
);

const name$ = stream$.pipe(
  map((state: {name: string, age?:number}) => state.name)
);

name$.subscribe(console.log);