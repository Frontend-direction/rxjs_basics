

const auditBtn = document.getElementById('audit-time');

const clickA$ = rxjs.fromEvent(auditBtn, 'click');

clickA$.pipe(
  rxjs.operators.auditTime(2000)
).subscribe(console.log);

