
// elems 
const amount = document.getElementById('amount');
const rate = document.getElementById('rate');
const loanLength = document.querySelectorAll('.loan-length');
const result = document.getElementById('result');

// helpers
const streamInputVal = el => {
  return rxjs.fromEvent(el, 'input').pipe(
    rxjs.operators.map(event => event.target.value)
  );
}

const calculateMortgage = (interest, loanAmount, loanLength) => {
  const calculatedInterest = interest /1200;
  const total = loanAmount * calculatedInterest / (1 - (Math.pow(1/(1+calculatedInterest), loanLength)))

  return total.toFixed(2);
}

const saveResponse = (amount) => {
  return rxjs.of(amount).pipe(rxjs.operators.delay(1000));
}

// streams
const amount$ = streamInputVal(amount);
const rate$ = streamInputVal(rate);
const loanLength$ = streamInputVal(loanLength);


const calculation$ = rxjs.combineLatest(
  amount$,
  rate$,
  loanLength$
).pipe(
  rxjs.operators.map(([interest, loanAmount, loanLength]) => {
    return calculateMortgage(interest, loanAmount, loanLength)
  }),
  rxjs.operators.filter(val => !isNaN(val)),
  rxjs.operators.share()
)

calculation$.subscribe(amount => {
  result.innerText = amount;
});


calculation$.pipe(
  rxjs.operators.mergeMap(amount => saveResponse(amount))
).subscribe();