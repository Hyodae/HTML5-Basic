function doFirst() {
    var x = document.getElementById('canvas');
    canvas = x.getContext('2d');
    
    /* rect */
    canvas.fillStyle = "blue";
    canvas.strokeStyle = "red";
    canvas.strokeRect(10,10,100,100);
    canvas.fillRect(10,120,100,100);
    canvas.clearRect(20,130,45,65);
    
    /* rainbow color */
    var g = canvas.createLinearGradient(200,10,300,100);
	g.addColorStop(.0, "red");
	g.addColorStop(.167	, "orange");
	g.addColorStop(.333, "yellow");
	g.addColorStop(.5, "green");
	g.addColorStop(.667, "blue");
	g.addColorStop(.833, "indigo");
	g.addColorStop(1, "violet");    
    canvas.fillStyle = g;
    canvas.fillRect(200,10,100,100);
    
    
    /*
    canvas.beginPath();
    canvas.moveTo(50,50);
    canvas.lineTo(70,250);
    canvas.lineTo(300,200);
    canvas.closePath();
    canvas.stroke();
    */
    
    canvas.beginPath();
    canvas.moveTo( 150, 150);
    canvas.lineTo( 150, 450);

    canvas.closePath();
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(300, 300);
    canvas.lineTo(15, 300)
    canvas.closePath();
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(50, 200);
    canvas.lineTo(250, 400)
    canvas.closePath();
    canvas.stroke();


    canvas.beginPath();
    canvas.moveTo(250,200);
    canvas.lineTo(50, 400)
    canvas.closePath();
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(127,250);
    canvas.lineTo(173, 350)
    canvas.closePath();
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(173,250);
    canvas.lineTo(127, 350)
    canvas.closePath();
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(200,277);
    canvas.lineTo(100, 323)
    canvas.closePath();
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(100,277);
    canvas.lineTo(200, 323)
    canvas.closePath();
    canvas.stroke();
    /*   ODAVDE CRTAM */
    canvas.beginPath();
    canvas.moveTo(150,150);
    canvas.lineTo(173, 250)
    canvas.closePath();
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(150,150);
    canvas.lineTo(127, 250)
    canvas.closePath();
    canvas.stroke();  

    canvas.beginPath();
    canvas.moveTo(300,300);
    canvas.lineTo(200, 277)
    canvas.closePath();
    canvas.stroke();  

    canvas.beginPath();
    canvas.moveTo(200,323);
    canvas.lineTo(300, 300)
    canvas.closePath();
    canvas.stroke();  

    canvas.beginPath();
    canvas.moveTo(50,200);
    canvas.lineTo(126, 249)
    canvas.closePath();
    canvas.stroke();  

    canvas.beginPath();
    canvas.moveTo(50,200);
    canvas.lineTo(101, 278)
    canvas.closePath();
    canvas.stroke();  

    canvas.beginPath();
    canvas.moveTo(101,322);
    canvas.lineTo(50, 400)
    canvas.closePath();
    canvas.stroke();  

    canvas.beginPath();
    canvas.moveTo(127,350);
    canvas.lineTo(50, 400)
    canvas.closePath();
    canvas.stroke();  

    canvas.beginPath();
    canvas.moveTo(127,350);
    canvas.lineTo(150, 450);

    canvas.closePath();
    canvas.stroke();  


    canvas.beginPath();
    canvas.moveTo(173,350);
    canvas.lineTo(150, 450); 
    canvas.closePath();
    canvas.stroke();  


    canvas.beginPath();
    canvas.moveTo(173,350);
    canvas.lineTo(250, 400); 
    canvas.closePath();
    canvas.stroke();  

    canvas.beginPath();
    canvas.moveTo(200,322);
    canvas.lineTo(250, 400); 
    canvas.closePath();
    canvas.stroke();  

    canvas.beginPath();
    canvas.moveTo(250,200);
    canvas.lineTo(173, 250)
    canvas.closePath();
    canvas.stroke();


    canvas.beginPath();
    canvas.moveTo(250,200);
    canvas.lineTo(200, 278)
    canvas.closePath();
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(101,322);
    canvas.lineTo(15, 300)
    canvas.closePath();
    canvas.stroke();  

    canvas.beginPath();
    canvas.moveTo(101,277);
    canvas.lineTo(15, 300)
    canvas.closePath();
    canvas.stroke();      
    
}
window.addEventListener("load", doFirst, false);