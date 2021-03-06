function doFirst() {
    mypic = document.getElementById('facepic');
    mypic.addEventListener("dragstart", startDrag, false);
    mypic.addEventListener("dragend", endDrag, false);
    leftbox = document.getElementById('leftbox');
    leftbox.addEventListener("dragenter", dragEnter, false);
    leftbox.addEventListener("dragleave", dragLeave, false);
    leftbox.addEventListener("dragover", function(e){e.preventDefault();}, false);
    leftbox.addEventListener("drop", dropped, false);
}

function endDrag(e) {
     if (leftbox.innerHTML == '<img id="facepic" src="http://devhumor.com/content/uploads/images/November2014/html.jpg" width="250">') {
        pic = e.target;
        pic.style.visibility = 'hidden';
     }
}

function dragEnter(e) {
    e.preventDefault();
    leftbox.style.background = "SkyBlue";
    leftbox.style.border = "3px solid red";
}

function dragLeave(e) {
    e.preventDefault();
    leftbox.style.background = "White";
    leftbox.style.border = "3px solid blue";
}

function startDrag(e) {
    var code = '<img id="facepic" src="http://devhumor.com/content/uploads/images/November2014/html.jpg" width="250">';
    e.dataTransfer.setData('Text',code);
}

function dropped(e) {
    e.preventDefault();
    leftbox.innerHTML = e.dataTransfer.getData('Text');
}

window.addEventListener("load", doFirst, false);