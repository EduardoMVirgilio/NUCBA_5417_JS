const leer = (key = "", storage = localStorage) => storage.getItem(key);
const transformar = (key) => JSON.parse(leer(key));
const escribir = function (key = "", data = {}, storage = localStorage) {
  return storage.setItem(key, JSON.stringify(data));
};
const $ = (selector = "") => document.querySelector(selector);
const $$ = (selector = "") => document.querySelectorAll(selector);

export { leer, transformar, escribir, $, $$ };
