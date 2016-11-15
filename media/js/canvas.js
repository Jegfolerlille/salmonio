addEventListener('load', initiate);
var canvas;
var arr=[
[120,550,50,150],
[300,550,50,200],
[410,550,50,200],
[500,550,50,200]
];

function initiate() {
	var elem=document.getElementById('canvas');
	canvas=elem.getContext('2d');
	for(var i=0; i<arr.lenght; i++){
	obstacle(arr[i][0],arr[i][1],arr[i][2],arr[i][3]);
	}
	addEventListener ('mousemove', animation)
}

function obstacle(x,y,w,h) {
    canvas.fillStyle='#99753d';
	canvas.strokeStyle='#99753d';	
	canvas.fillRect(x,y,w,h);
	canvas.beginPath();
	canvas.closePath();
				
}

function animation (e) {
	canvas.clearRect (0,0,921,683);
		for(var i=0; i<arr.length; i++){
		obstacle(arr[i][0],arr[i][1],arr[i][2],arr[i][3]);
		}
		bear(e);
		animation_move(e);
		test();
}
function animation_move(e) {
	var img=new Image();
	var xmouse=e.clientX;
	var ymouse=e.clientY;
		img.src='media/img/salmon.png';
		canvas.drawImage(img,xmouse,ymouse);
}

function bear(e){
	var xmouse=e.clientX;
	var ymouse=e.clientY;
	var xeyel=460
	var yeyel=95;
	var ang=Math.atan2(ymouse-yeyel, xmouse-yeyel);
	var x=xeyel+Math.round(Math.cos(ang)*6);
	var y=yeyel+Math.round(Math.sin(ang)*6);
	var img=new Image();
		img.src='media/img/bear.png';
		canvas.drawImage(img,400,52);
		canvas.beginPath();
		canvas.arc(xeyel,yeyel,8,0,Math.PI*2, false);
		canvas.moveTo(xeyel+30,yeyel);
		canvas.arc(xeyel+20,yeyel,8,0,Math.PI*2, false);
		canvas.fillStyle='#ffffff';
		canvas.fill();
		canvas.beginPath();
		canvas.moveTo(x,y);
		canvas.arc(x,y,3,0,Math.PI*2, false);
		canvas.moveTo(x+5,y);
		canvas.arc(x+20,y,3,0,Math.PI*2, false);
		canvas.fillStyle='black';
		canvas.fill();
}

function test(){
	canvas.font='bold 24px verdana,sans-serif'
	canvas.textAlign='start';
	canvas.fillText('BEWARE OF THE BEAR',20,44);
	var text='Salmonio';
	var size=canvas.measureText(text);
	canvas.restore();
	canvas.fillText(text,110,144);
	canvas.strokeRect(110,120,size.width,24);
	canvas.shadowColor='rgba(0,0,0,0.5)';
	canvas.shadowOffsetX=4
	canvas.shadowOffsetY=5
	canvas.shadowBlur=5
		
	
	
	
	
	
}









