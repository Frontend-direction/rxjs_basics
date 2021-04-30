
const input = document.getElementById('text-input');

const input$ = rxjs.fromEvent(input, 'keyup');

input$.pipe(
  rxjs.operators.debounce(() => rxjs.interval(1000)),
  rxjs.operators.pluck('target', 'value'),
  rxjs.operators.distinctUntilChanged(),
).subscribe(console.log);

// debounceTime(time)
// debounce(func => Observable)