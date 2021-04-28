function calculatePercantage(element) {
  const {
    scrollTop,
    scrollHeight,
    clientHeight,
  } = element;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const scroll$ = rxjs.fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
  rxjs.operators.map(({ target }) => calculatePercantage(target.documentElement))
);

const elem = document.querySelector('.progress-bar');

progress$.subscribe(percentage => {
  elem.style.width = `${percentage}%`
});