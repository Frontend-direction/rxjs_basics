import { fromEvent, empty } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, pluck, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';

const BASE_URL = 'https://api.openbrewerydb.org/breweries';

const switchInput = document.getElementById('switch-input');

const switchInput$ = fromEvent(switchInput, 'keyup');

switchInput$.pipe(
  debounceTime(200),  
  pluck('target', 'value'),
  distinctUntilChanged(),
  switchMap(searchTerm => {
    return ajax.getJSON(`${BASE_URL}?by_name=${searchTerm}`).pipe(
      catchError(() => empty())
    )
  })
).subscribe(console.log);