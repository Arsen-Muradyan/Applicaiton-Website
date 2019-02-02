var btn = document.getElementsByClassName('btn-next');
for(var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", next)
}
var slide = document.getElementsByClassName("slide");
var num = 0;
function next() {
    num++;
    if(num == slide.length) {
        num = 0;
    }
    for(var i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none'
    }
    slide[num].style.display = 'flex';
}

var modal = document.getElementsByClassName("modal-parent");
function myFunc() {
    modal[0].style.display = 'block';
}
let exit = document.getElementById('close')
window.onclick = function (e) {
    if(e.target == modal[0]) {
        modal[0].style.display = 'none'
    }
}
exit.addEventListener("click", close)
document.getElementById("submit").addEventListener("click", close)
function close() {
    modal[0].style.display = 'none';
}
for (var i of document.getElementsByClassName('container')) {
    i.style.maxWidth = screen.availWidth + 'px';
}
document.getElementsByClassName('container')[1].style.maxHeight = screen.availHeight + 'px'