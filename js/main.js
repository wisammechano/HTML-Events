function moveFly(e) {
    if (!flyShown) return;
    let x = e.clientX;
    let y = e.clientY;
    fly.style.top = (y - 20) + "px";
    fly.style.left = (x - 40) + "px";
}

let flyShown = false;

let fly = document.querySelector(".fly")
let info = document.querySelector(".info")
document.onmousemove = moveFly;
document.getElementById("toggle-follower").onclick = function (e) {
    let d = fly.style.display || "none";
    fly.style.display = d == "none" ? "block" : "none";
    flyShown = !flyShown;
}

//--------------------------------------------

// Make the DIV element draggable:
dragElement(document.getElementById("draggable"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    elmnt.children[0].onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        info.innerHTML = `<span>X: ${elmnt.offsetLeft}, Y: ${elmnt.offsetTop}</span>`
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}