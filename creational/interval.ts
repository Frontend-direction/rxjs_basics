import { interval, timer } from 'rxjs';

const observer = {
  next: val => console.log('next', val),
  error: err => console.log('err', err),
  complete: () => console.log('complete'),
}

// const source$ = interval(1000);
const source$ = timer(0, 1000);

source$.subscribe(observer);