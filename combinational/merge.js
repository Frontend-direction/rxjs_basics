// Elements
const count = document.getElementById("countdown");
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

// Observables
const startCount$ = rxjs.fromEvent(startBtn, 'click');
const stopCount$ = rxjs.fromEvent(stopBtn, 'click');
const interval$ = rxjs.interval(1000);

const COUNTDOWN_FROM = 10;


rxjs.merge(
  startCount$.pipe(rxjs.operators.mapTo(true)),
  stopCount$.pipe(rxjs.operators.mapTo(false))
).pipe(
  rxjs.operators.switchMap((isStart) => {
    return isStart ? interval$ : rxjs.empty();
  }),
  rxjs.operators.mapTo(-1),
  rxjs.operators.scan((acc, curr) => acc + curr, COUNTDOWN_FROM),
  rxjs.operators.takeWhile(val = val >= 0),
  rxjs.operators.startWith(COUNTDOWN_FROM)
).subscribe(currentCount => {
  count.innerText = currentCount;
})