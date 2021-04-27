
const observer = {
  next: val => console.log('next', val),
  error: err => console.log('err', err),
  complete: () => console.log('complete'),
}

const source$ = rxjs.fromEvent(document, 'click');

source$.subscribe(observer);