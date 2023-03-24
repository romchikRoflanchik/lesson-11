const body = document.querySelector('body');
const title = document.querySelector('h1');
const p = document.querySelector('p');
const aElements = document.querySelectorAll('a');
const div = document.querySelector('div');
const ul = document.querySelector('ul');
const q1 = document.querySelector('#q1')

let n = prompt('Введіть колір фону(red,blue,green)');
body.style.backgroundColor = n;

let b = prompt('Введіть шрифт(Arial,San-serif,monospace)');
body.style.fontFamily = b;

let c = prompt('Введіть позицію заголовка');
title.style.textAlign = c;

let q = prompt('Введіть фон параграфу');
p.style.backgroundColor = q;

let m = prompt('Введіть колір тексту силки');
for (const item of aElements) {
    item.style.color = m;
};

let w = prompt('Введіть товщина тексту');
div.style.fontWeight = w;

let e = prompt('Введіть тип маркера');
ul.style.listStyle = e;

let r = prompt('Введіть силку');
q1.href += r;
q1.textContent = r;
q1.target = "_blank";

let t = prompt('Введіть силку');
q2.href += t;
q2.textContent = t;
q2.target = "_blank";

let y = prompt('Введіть силку');
q3.href += y;
q3.textContent = y;
q3.target = "_blank";

