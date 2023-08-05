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
	x:100,
	y:100,
	draw: function(){
		playerDraw("blue",this.x,this.y,1);
	}
}

let p2 = {
	x:200,
	y:100,
	draw: function(){
		ctx.fillStyle = "blue";
		ctx.beginPath();
		ctx.arc (this.x,this.y, unit/2, 0, 2*Math.PI);
		ctx.fill();
    ctx.fillStyle = "white";
    ctx.textBaseline = 'middle';
    ctx.textAlign = "center";
    ctx.font = "30px Arial";
    ctx.fillText("2", this.x, this.y);
	}
}

let p3 = {
	x:300,
	y:100,
	draw: function(){
		ctx.fillStyle = "blue";
		ctx.beginPath();
		ctx.arc (this.x,this.y, unit/2, 0, 2*Math.PI);
		ctx.fill();
    ctx.fillStyle = "white";
    ctx.textBaseline = 'middle';
    ctx.textAlign = "center";
    ctx.font = "30px Arial";
    ctx.fillText("3", this.x, this.y);
	}
}

let p4 = {
	x:400,
	y:100,
	draw: function(){
		ctx.fillStyle = "blue";
		ctx.beginPath();
		ctx.arc (this.x,this.y, unit/2, 0, 2*Math.PI);
		ctx.fill();
    ctx.fillStyle = "white";
    ctx.textBaseline = 'middle';
    ctx.textAlign = "center";
    ctx.font = "30px Arial";
    ctx.fillText("4", this.x, this.y);
	}
}

let p5 = {
	x:500,
	y:100,
	draw: function(){
		ctx.fillStyle = "blue";
		ctx.beginPath();
		ctx.arc (this.x,this.y, unit/2, 0, 2*Math.PI);
		ctx.fill();
    ctx.fillStyle = "white";
    ctx.textBaseline = 'middle';
    ctx.textAlign = "center";
    ctx.font = "30px Arial";
    ctx.fillText("5", this.x, this.y);
	}
}


let objList=[p1,p2,p3,p4,p5];
