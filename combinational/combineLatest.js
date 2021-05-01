

const first = document.getElementById('first');
const second = document.getElementById('second');

const keyUpAsVal = elem => {
  return rxjs.fromEvent(elem, 'keyup').pipe(
    rxjs.operators.map(event => event.target.valueAsNumber)
  )
}

rxjs.combineLatest(
  keyUpAsVal(first),
  keyUpAsVal(second),
).pipe(
  rxjs.operators.filter(([first, second]) => !isNaN(first) && !isNaN(second)),
  rxjs.operators.map(([first, second]) => first + second)
)
.subscribe(console.log);