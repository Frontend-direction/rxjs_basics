
const counter$ = rxjs.interval(1000);
const countDown = document.getElementById('countdown');
const message = document.getElementById('message');
const abortBtn = document.getElementById('abort');

const click$ = rxjs.fromEvent(abortBtn, 'click');

counter$.pipe(
  rxjs.operators.mapTo(-1),
  rxjs.operators.scan((acc, curr) => acc + curr, 10),
  rxjs.operators.filter(val => val >= 0),
  rxjs.operators.takeWhile(val => val >= 0),
  rxjs.operators.takeUntil(click$)
).subscribe(val => {
  countDown.innerText = val;

  if(!val) {
    message.innerText = 'We finished!';
  }
})


console.log('here')