'use strict'
{
　const fortune = ['大吉','吉','凶'];

  const btn = document.getElementById('btn');


  btn.addEventListener('click',() => {
    btn.textContent = fortune[Math.floor(Math.random() * fortune.length)]
  })
}