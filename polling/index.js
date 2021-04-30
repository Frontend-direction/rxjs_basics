const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const statusCon = document.getElementById('status');
const dogImg = document.getElementById('dog');

// streams
const startClick$ = rxjs.fromEvent(startBtn, 'click');
const stopClick$ = rxjs.fromEvent(stopBtn, 'click');

startClick$.pipe(
  rxjs.operators.exhaustMap(() => rxjs.timer(0, 5000).pipe(
    rxjs.operators.tap(() => statusCon.innerText = 'Active'),
    rxjs.operators.switchMap(() => rxjs.ajax.ajax.getJSON(
        'https://random.dog/woof.json'
      ).pipe(
        rxjs.operators.pluck('url')
      )
    ),
    rxjs.operators.takeUntil(stopClick$),
    rxjs.operators.finalize(() => statusCon.innerText = 'Stopped')
  )),
).subscribe(url => dogImg.src = url)