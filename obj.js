function playerDraw(colour,x,y,number){
	ctx.fillStyle = colour;
	ctx.beginPath();
	ctx.arc (x,y, unit/2, 0, 2*Math.PI);
	ctx.fill();
	ctx.fillStyle = "white";
	ctx.textBaseline = 'middle';
	ctx.textAlign = "center";
	ctx.font = parseInt(unit/2) + "px Arial";
	ctx.fillText(number, x, y);
}

let p1 = {
	x:10,
	y:100,
	draw: function(){
		playerDraw("blue",this.x,this.y,1);
	}
}

let p2 = {
	x:20,
	y:100,
	draw: function(){
		playerDraw("blue",this.x,this.y,2);
	}
}

let p3 = {
	x:30,
	y:100,
	draw: function(){
		playerDraw("blue",this.x,this.y,3);
	}
}

let p4 = {
	x:40,
	y:100,
	draw: function(){
		playerDraw("blue",this.x,this.y,4);
	}
}

let p5 = {
	x:50,
	y:100,
	draw: function(){
		playerDraw("blue",this.x,this.y,5);
	}
}

let o1 = {
	x:10,
	y:200,
	draw: function(){
		playerDraw("red",this.x,this.y,1);
	}
}

let o2 = {
	x:20,
	y:200,
	draw: function(){
		playerDraw("red",this.x,this.y,2);
	}
}

let o3 = {
	x:30,
	y:200,
	draw: function(){
		playerDraw("red",this.x,this.y,3);
	}
}

let o4 = {
	x:40,
	y:200,
	draw: function(){
		playerDraw("red",this.x,this.y,4);
	}
}

let o5 = {
	x:50,
	y:200,
	draw: function(){
		playerDraw("red",this.x,this.y,5);
	}
}

let bball = {
	x:10,
	y:300,
	draw: function(){
	 ctx.fillStyle = "orange";
   ctx.strokeStyle = "black";
   ctx.lineWidth = 1;
	 ctx.beginPath();
	 ctx.arc (this.x,this.y, unit/2.5, 0, 2*Math.PI);
	 ctx.fill();
   ctx.stroke();
    
  ctx.beginPath();
  ctx.moveTo(this.x+unit/2.5, this.y);
  ctx.lineTo(this.x-unit/2.5, this.y);
  ctx.moveTo(this.x, this.y+unit/2.5);
  ctx.lineTo(this.x, this.y-unit/2.5);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc (this.x,this.y+unit/2.5, unit/3.5, 3.6, 5.8);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc (this.x,this.y-unit/2.5, unit/3.5, 0.5, 2.7);
  ctx.stroke();
    
	}
}

let objList=[p1,p2,p3,p4,p5,o1,o2,o3,o4,o5,bball];
