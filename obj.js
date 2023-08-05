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

let objList=[p1,p2,p3,p4,p5];
