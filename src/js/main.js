"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);
var glassNumber = document.querySelector('.hydrapp__wrapper--number--js');
const addGlass = document.querySelector('.hydrapp__AddButton--js');
const deleteGlass = document.querySelector('.hydrapp__DeleteButton');
var glass = 0;
glassNumber.innerHTML = glass;


addGlass.addEventListener('click', (e) => {
  e.preventDefault();
  const adding = Number(glassNumber.innerHTML) + 1;
  glassNumber.innerHTML = adding;
  console.log(`${adding} szklanka wody`);
  localStorage.setItem('szklanka wody', adding);

});

deleteGlass.addEventListener('click', (e) => {
  e.preventDefault();
  const reduction = Number(glassNumber.innerHTML) - 1;
  if (reduction >= 0) {
    glassNumber.innerHTML = reduction;
    console.log(`${reduction} szklanka wody`);
    localStorage.setItem('szklanka wody', reduction);

  }

  if (reduction < 0) {
    glassNumber.innerHTML = 0;
    console.log(`nie możesz wypić mniej niż 0 szklanek`);  }
});