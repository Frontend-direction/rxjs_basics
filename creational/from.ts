import { from } from 'rxjs';

const hello = function*() {
  yield 'hello';
  yield 'world!';
} 

const iterator = hello();

const observer = {
  next: val => console.log('next', val),
  error: err => console.log('err', err),
  complete: () => console.log('complete'),
}

const source$ = from(iterator);

source$.subscribe(observer);