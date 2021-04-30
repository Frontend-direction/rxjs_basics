

const sampleBtn = document.getElementById('sample-btn');


const click$ = rxjs.fromEvent(sampleBtn, 'click');

click$.pipe(
  rxjs.operators.sampleTime(1000)
).subscribe(console.log);