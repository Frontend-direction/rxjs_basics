

const inputMergeAll = document.getElementById("mergeAll");


const mergeAllInput$ = rxjs.fromEvent(inputMergeAll, 'keyup');

mergeAllInput$.pipe(
  rxjs.operators.debounceTime(1000),
  rxjs.operators.map(val => {
    const term = val.target.value;

    return rxjs.ajax.ajax.getJSON(`https://api.github.com/users/${term}`)
  }),
  rxjs.operators.mergeAll(),
).subscribe(console.log)