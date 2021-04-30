
const btn = document.getElementById('throttle-btn');
click$ = rxjs.fromEvent(btn, 'click');

click$.pipe(
  rxjs.operators.throttleTime(1000)
).subscribe(console.log);