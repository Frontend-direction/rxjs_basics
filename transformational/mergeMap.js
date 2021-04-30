
const mouseDown$ = rxjs.fromEvent(document, 'mousedown');
const mouseUp$ = rxjs.fromEvent(document, 'mouseup');
const intervalsMergeMap$ = rxjs.interval(1000);

mouseDown$.pipe(
  rxjs.operators.mergeMap(() => intervalsMergeMap$.pipe(
    rxjs.operators.takeUntil(mouseUp$)
  ))
).subscribe(console.log);

