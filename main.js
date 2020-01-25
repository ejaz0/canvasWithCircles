const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const blobCount = 10;
const colors = new Array("red","orange","green","blue","yellow","purple","black","pink");
const sizes = new Array(10, 20, 30, 40);

const randomc = document.body.style.backgroundColor;


let blobs = new Array();

let x = 50;
let y = 50;


class Blob{
    constructor(color, size){
        this.x =  Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.color = color;
        this.size = size;
        this.xChange = Math.random();
        this.yChange = Math.random();
    }

    move() {
        
        if (this.x >= canvas.width || this.x <= 0) {
            this.xChange *= -1;
        }
        if (this.y >= canvas.height || this.y <= 0) {
            this.yChange *= -1;
        }

        this.x += this.xChange;
        this.y += this.yChange;

    }
    
    draw(){

        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.stroke();
        
    }
}

function randomChoice(arr){
   return arr[Math.floor(Math.random()*arr.length)];
}

for(let i=0; i<blobCount; i++){
    let randomColor = randomChoice(colors);
    let randomSizes = randomChoice(sizes);
    blobs.push(new Blob(randomColor, randomSizes));
}

function canvasDraw(){
    context.clearRect(0,0, canvas.width, canvas.height);

    blobs.forEach(function(obj){
        obj.draw();
        obj.move();
    })

}

function randomBackground(){
        //  bodyBcg.style.backgroundColor = colors[2];
      const randomc = randomChoice(colors);
}

setInterval(canvasDraw, 10);
setInterval(randomBackground, 10);


/* blob(25, 100, 20, "green");
blob(75, 25, 20, "red");
blob(55, 199, 20, "blue");*/
