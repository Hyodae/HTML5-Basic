function doFirst() {
    var x = document.getElementById('canvas');
    canvas = x.getContext('2d');
  
    canvas.font = "bold 22px Tahoma";
    canvas.textAlign = "start";
    
    canvas.save();  // Save here

    canvas.fillText("let's begin!",10,30);
    
    canvas.rotate(1);
    canvas.fillText("after rotation",60,10);
    
    canvas.restore();   // Back to the saved point
    canvas.fillText("after restoring",100,100);
    
}
window.addEventListener("load", doFirst, false);