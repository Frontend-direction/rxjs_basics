
const GITHUB_PUBLIC_API = 'https://api.github.com';

rxjs.forkJoin(
[
  rxjs.of(1),
  rxjs.of(2)

]
  // {
  //   users: rxjs.ajax.ajax.getJSON(
  //     `${GITHUB_PUBLIC_API}/users/reactivex`
  //   ),
  //   repo: rxjs.ajax.ajax.getJSON(
  //     `${GITHUB_PUBLIC_API}/users/reactivex/repos`
  //   ),
  // }
).subscribe(console.log)