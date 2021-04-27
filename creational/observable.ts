import { Observable } from 'rxjs';

const observer = {
  next: value => console.log('next', value),
  error: err => console.log('error', err),
  complete: () => console.log('complete')
};

const observable = new Observable(subscriber => {
  let count = 0;
  const id = setInterval(() => {
    subscriber.next(count);
    count = count + 1;
  }, 1000);

  return () => {
    console.log('called');
    clearInterval(id);
  }
})

console.log('before');
const subscription = observable.subscribe(observer);
const subscription2 = observable.subscribe(observer);
console.log('after');
subscription.add(subscription2);

setTimeout(() => {
  subscription.unsubscribe();
}, 3500)