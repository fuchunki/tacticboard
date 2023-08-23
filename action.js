const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let maxWorH=Math.min(window.innerWidth,window.innerHeight);
let unit=maxWorH/17;

canvas.width=maxWorH;
canvas.height=maxWorH;

function drawBballCourt(){
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(unit, 2*unit);
  ctx.lineTo(maxWorH-unit, 2*unit);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.rect(unit, -unit, maxWorH-2*unit, maxWorH);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(8.5*unit, 2*unit, 1.8*unit, 0, 2 * Math.PI);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(8.5*unit, 10.2*unit, 1.8*unit, 0, 2 * Math.PI);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(5.5*unit, 16*unit);
  ctx.lineTo(6.7*unit, 10.2*unit);
  ctx.lineTo(10.3*unit, 10.2*unit);
  ctx.lineTo(11.5*unit, 16*unit);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(8.5*unit, 14.8*unit, 6.4*unit, Math.PI, 0);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(2.1*unit, 16*unit);
  ctx.lineTo(2.1*unit, 14.8*unit);
  ctx.moveTo(14.9*unit, 16*unit);
  ctx.lineTo(14.9*unit, 14.8*unit);
  ctx.stroke();
}

function drawAll(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawBballCourt();
  for(let i=0;i<objList.length;i++)
    objList[i].draw();
}

drawAll();

let nth = {
	x:0,
	y:0,
	draw: function(){
	}
}
let focus=nth;

canvas.addEventListener("mousedown",e=>{
  for(let i=0;i<objList.length;i++){
    let Dx=objList[i].x-e.clientX;
    let Dy=objList[i].y-e.clientY;
    let D=Math.sqrt(Dx*Dx+Dy*Dy);
    if(D<unit/2)focus=objList[i];
  }
});

canvas.addEventListener('mousemove', e => {
  e.preventDefault();
  if(focus==nth)return;
  focus.x=e.clientX;
  focus.y=e.clientY;
  drawAll();
});

canvas.addEventListener("mouseup",e=>{
      focus=nth;
});

canvas.addEventListener("touchstart", e=>{
  let touch = e.touches[0];
  let mouseEvent = new MouseEvent("mousedown", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);

canvas.addEventListener("touchmove", e=>{
  let touch = e.touches[0];
  let mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);

canvas.addEventListener("touchend",e=>{
    let mouseEvent = new MouseEvent("mouseup", {
  });
  canvas.dispatchEvent(mouseEvent);
}, false);

document.addEventListener("touchstart", e=>{
  e.preventDefault();
});
