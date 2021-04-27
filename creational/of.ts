import { of, range } from 'rxjs';

const observer = {
  next: val => console.log('next', val),
  error: err => console.log('err', err),
  complete: () => console.log('complete'),
}

const source$ = of(1,2,3,4,5);
const source2$ = range(1,5); // produce the same as above

source$.subscribe(observer);
source2$.subscribe(observer);