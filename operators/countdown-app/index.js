
const counter$ = rxjs.interval(1000);
const countDown = document.getElementById('countdown');
const message = document.getElementById('message');

counter$.pipe(
  rxjs.operators.mapTo(-1),
  rxjs.operators.scan((acc, curr) => acc + curr, 10),
  rxjs.operators.filter(val => val >= 0)
).subscribe(val => {
  countDown.innerText = val;

  if(!val) {
    message.innerText = 'We finished!';
  }
})


console.log('here')