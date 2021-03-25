import FastClick from "./fastclick";


window.addEventListener(
  "load",
  function () {
    FastClick.attach(document.body);
  },
  false
);

// 多指滑动禁止
document.documentElement.addEventListener(
  "touchmove",
  function (e) {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  },
  false
);
