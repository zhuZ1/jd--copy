//轮播图代码
var obox = document.querySelector('.box')
var oBtnRight = document.querySelector('.btn-right')
var oBtnLeft = document.querySelector('.btn-left')
var oImages = document.querySelectorAll('.box2 img')
var otabs = document.querySelectorAll('.tab li')


var index = 0
var timer = null
function change(bool) {
    oImages[index].className = ''
    otabs[index].className = ''
    if(bool) {
        index -= 1
        if (index < 0) {
            index = 5
        }} else{
        index += 1
        if(index > 5) {
            index = 0
        }}
    oImages[index].className = 'on'
    otabs[index].className = 'on'
}

oBtnRight.onclick = function () {
    change(false)
}
oBtnLeft.onclick = function (){
    change(true)
}

obox.onmouseover = function () {
    clearInterval(timer)
}
obox.onmouseout = function() {
    auto()
}

function auto(){
    timer = setInterval(function (){
        change(false)
    },3000)
}
auto()

for(let i = 0;i< otabs.length; i++) {
    otabs[i].index = i
    otabs[i].onmouseover = function () {
        var index = this.index
        play(index)
    }
    otabs[i].onmouseout = function () {
        otabs[index].className = ''
    }
}
function play(index){
    for(let i = 0;i < otabs.length; i++){
        oImages[i].className = '';
        otabs[i].className = '';
    }
    oImages[index].className = 'on';
    otabs[index].className = 'on';
}
//tab 栏代码
var links = document.querySelectorAll('.tab-hd a')
for(let i = 0; i < 2; i++) {
    var link = links[i]
    link.index = i
    link.onmouseover = linkMouseover
}
function linkMouseover() {
    var line = document.querySelector('.line')
    animate(line, this.offsetLeft)
    var index = this.index
    var uls = document.querySelectorAll('.tab-bd ul')
    for(let i =0; i < uls.length; i++) {
        var ul = uls[i]
        ul.className = ''
    }
    uls[index].className = 'current'
}

//回到顶部
var oSearch = document.querySelector('.search')
window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop
    if(scrollTop >= 10) {
        oSearch.className = 'search search-fix'
    } else {
        oSearch.className = 'search'
    }
}




var totop = document.querySelector('.to-top')
var timerId = null
totop.onclick = function () {
    if (timerId) {
        clearInterval(timerId)
    }
    timerId = setInterval(function () {
        var target = 0
        var step = 10
        var current = document.documentElement.scrollTop
        if (current > target) {
            step = - Math.abs(step)
        }
        if (Math.abs(current - target) <= Math.abs(step)) {
            clearInterval(timerId)
            document.documentElement.scrollTop = target
            return
        }
        current += step
        document.documentElement.scrollTop = current
    }, 5)

}
