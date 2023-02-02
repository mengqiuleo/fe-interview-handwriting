const intersectionObserver = new IntersectionObserver(function(entries){
  if(entries[0].intersectionRatio <= 0) return; //<=0 说明完全不可见
  console.log('已经进入可视区域内')
  console.log('Loaded new items')
})

//开始观察
intersectionObserver.observe(document.getElementById('example'))

//停止观察
intersectionObserver.unobserve(element)

//关闭观察器
intersectionObserver.disconnect()