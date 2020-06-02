//防抖函数
export function debounce(func, delay) {
  let timer = null
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// 格式化日期，默认格式为'yyyy-MM-dd'
export function formatDate(data, fmt = 'yyyy-MM-dd') {
  if (/(y+)/.test(fmt)) {
    // console.log(RegExp.$1)
    fmt = fmt.replace(RegExp.$1, (data.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  // console.log(fmt)
  let o = {
    'M+': data.getMonth() + 1,
    'd+': data.getDate(),
    'h+': data.getHours(),
    'm+': data.getMinutes(),
    's+': data.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      // console.log(RegExp.$1)
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      // console.log(fmt)
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}