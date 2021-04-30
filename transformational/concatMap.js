

const interval$ = rxjs.interval(1000);

const click$ = rxjs.fromEvent(document, 'click');

click$.pipe(
  rxjs.operators.concatMap(() => interval$.pipe(rxjs.operators.take(3)))
).subscribe(console.log);