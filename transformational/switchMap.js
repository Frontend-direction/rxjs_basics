
const BASE_URL = 'https://api.openbrewerydb.org/breweries';

const switchInput = document.getElementById('switch-input');

const switchInput$ = rxjs.fromEvent(switchInput, 'keyup');

switchInput$.pipe(
  rxjs.operators.debounceTime(200),  
  rxjs.operators.pluck('target', 'value'),
  rxjs.operators.distinctUntilChanged(),
  rxjs.operators.switchMap(searchTerm => {
    return rxjs.ajax.ajax.getJSON(`${BASE_URL}?by_name=${searchTerm}`)
  })
).subscribe(console.log);