/**
 * 防抖函数
 * @param {*} fn : 要执行的函数
 * @param {*} delay :延迟时间
 * @returns Function
 */
export const debounce = function (fn, delay = 1000) {
  let timer;
  return function (...argu) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn(...argu);
      clearTimeout(timer);
      timer = null;
    }, delay);
  };
};
