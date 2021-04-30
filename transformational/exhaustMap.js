
const authenticateUser = () => {
  return rxjs.ajax.ajax.post(
    'https://reqres.in/api/login', {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    }
  )
}

const loginBtn = document.getElementById('login');

const login$ = rxjs.fromEvent(loginBtn, 'click');

login$.pipe(
  rxjs.operators.exhaustMap(() => authenticateUser())
).subscribe(console.log);