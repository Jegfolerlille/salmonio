addEventListener('load', initiate);
function initiate(){
	var elem=document.getElementById('canvas');
	var canvas=elem.getContext('2d');
	canvas.save();
	
	
	//colors//
	
	canvas.strokeStyle='brown';
	canvas.fillStyle='green';
	canvas.globalAlpha='0,5';
	
	//pryamougolnichki//

	
	canvas.strokeRect(100,400,120,120);
	canvas.fillRect(110,410, 100,100);
	canvas.clearRect(120,420,80,80);
	
	//gradient//
	
	var grad=canvas.createLinearGradient(0,0,921,683);
	grad.addColorStop(0,'black');
	grad.addColorStop(0.5,'grey');
	grad.addColorStop(1,'white');
	canvas.fillStyle=grad;
	canvas.fillRect(10,410,60,60);
	
	canvas.beginPath();
	canvas.moveTo(500,500);
	canvas.lineTo(600,600);
	canvas.lineTo(500,600);
	canvas.fill();
	canvas.closePath();
	
	//stroke() fill() clip()//
		
	canvas.beginPath();
	canvas.moveTo(500,500);
	canvas.lineTo(600,600);
	canvas.lineTo(500,600);
	canvas.clip();
	for(var f=0; f<680; f=f+10){
		canvas.moveTo(0,f);
		canvas.lineTo(900,f);
	}
	canvas.stroke();
	canvas.closePath();
	
	//vozvrat k ishodniku//
	
	canvas.restore();
	
	//kruzhok//
	
	canvas.fillStyle='yellow';
	canvas.beginPath();
	canvas.arc(500,60,50,0,Math.PI*2,false);
	canvas.fill();
	
	
	canvas.restore();
	
	//kruzhok//
	
	canvas.fillStyle='yellow';
	canvas.beginPath();
	canvas.arc(200,60,50,0,Math.PI,true);
	canvas.fill();
	
	//izognutish//
	
	canvas.beginPath();
	canvas.moveTo(50,50);
	canvas.quadraticCurveTo(100,125,50,200);
	canvas.stroke();
	
	//svoistva linii//
	
	//lineWidth//
	//lineCap  butt,round,square//
	//lineJoin  round,bevel,miter//
	//miterLimit//
	
	canvas.lineWidth=10;
	canvas.lineCap='round';
	canvas.beginPath();
	canvas.moveTo(230,150);
	canvas.arc(200,150,30,0,Math.PI,false);
	canvas.stroke();
	canvas.lineWidth=5;
	canvas.lineJoin='miter';
	canvas.beginPath();
	canvas.moveTo(195,135);
	canvas.lineTo(215,155);
	canvas.lineTo(195,155);
	canvas.stroke();
	
	
	
	
	
	
}