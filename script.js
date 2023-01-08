'use strict';

const text = document.querySelector('span');
const section = document.querySelector('section');

// Useful function for mapping one number range to another
const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const startLoading = function () {
  let load = 0;

  const blurring = function () {
    load++;
    text.textContent = `${load}%`;
    text.style.opacity = `${scale(load, 0, 100, 1, 0)}`;
    section.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

    if (load > 99) clearInterval(loading);
  };

  const loading = setInterval(blurring, 30);
  return loading;
};
startLoading();
