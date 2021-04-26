import { of } from 'rxjs/operators';

function obser() {
  return of([1,2,3]);
}

obser().subscribe(val =>console.log(val));