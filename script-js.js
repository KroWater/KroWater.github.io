let elem=document.getElementById("monitor")
if (elem.addEventListener) {
    if ('onwheel' in document) {
        elem.addEventListener("wheel", onWheel);
    } else if ('onmousewheel' in document) {
        elem.addEventListener("mousewheel", onWheel);
    } else {
        elem.addEventListener("MozMousePixelScroll", onWheel);
    }
} else {
    elem.attachEvent("onmousewheel", onWheel);
} 

function onWheel(e){
	e=e||window.event;
	var delta = e.deltaY || e.detail || e.wheelDelta;
	let lever=document.getElementById("joystick")

	if(delta>0){
		lever.src="image/joystick-down.png"
	}	else if (delta<0){
		lever.src="image/joystick-up.png"
	}
}