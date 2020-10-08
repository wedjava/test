function throttle(fn, time = 1000) {
  // 厕所门默认开着的
  let isOpen = true //如果
  // console.log(arguments) //拿到的是handler函数
  return function () {
    // console.log(arguments)
    // 如果下一个人过来，发现门没开，那他就不能进厕所
    if (!isOpen) return
    // 当有人进来后，立马将门关上
    isOpen = false
    setTimeout(() => {
      // setTimeout这个箭头函数中不能获取arguments，此处的arguments是上一级的arguments
      fn.apply(this, arguments) //fn就是handler这函数
      // console.log(arguments);
      // 事情做完以后把门打开
      isOpen = true
    }, time)
  }
}