function doFirst() {
    var x = document.getElementById('canvas');
    canvas = x.getContext('2d');
  
    var pic = new Image();
    pic.src = "http://devhumor.com/content/uploads/images/November2014/html.jpg";
    
    pic.addEventListener("load", function(){canvas.drawImage(pic,0,0,x.width,x.height)}, false);
}
window.addEventListener("load", doFirst, false);