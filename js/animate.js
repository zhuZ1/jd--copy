//封装动画函数
function animate(element ,target,callback ) {
    //判断是否在执行动画
    if(element.timerId) {
        clearInterval(element.timerId)
    }
    element.timerId = setInterval(function(){
        var current = element.offsetLeft
        var step = 10
        if(current > target) {
            step = -Math.abs(step)
        }

        if(Math.abs(current - target) <= Math.abs(step)) {
            element.style.left = target + 'px'
            clearInterval(element.timerId)
            if(callback) {
                callback();
            }
            return
        }
        current += step
        element.style.left = current + 'px'
    }, 20);
}