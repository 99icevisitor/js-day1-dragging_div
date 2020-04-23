var div1  = document.createElement('div');
div1.className = 'demo1'
document.body.appendChild(div1);

var dragging = false;
var beforeX,beforeY;
div1.onmousedown = function(e){
    console.log('原始位置')
    console.log(e.clientX,e.clientY)
    beforeX = e.clientX;
    beforeY = e.clientY;
    dragging = true;
}
document.onmouseup = function(){
    dragging = false;
}
document.onmousemove = function(e){
    if(dragging===true){
        console.log(e.clientX,e.clientY)
        var deltaX = e.clientX - beforeX 
        var deltaY = e.clientY - beforeY 
        var top = parseInt(div1.style.top) || 0
        var left = parseInt(div1.style.left) || 0
        if(top + deltaY >= 0){//更进一步的优化
            div1.style.top = top + deltaY + 'px'
        }
        if(left + deltaX >=0){//更进一步的优化
            div1.style.left = left + deltaX + 'px'
        }
        beforeX = e.clientX;
        beforeY = e.clientY;
    }
}


