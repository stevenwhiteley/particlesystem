
let bertha;
let dancingvidPic;
let rainbowPic;
let dancingvids = [];
let howManydancingvids = 200;
let whichdancingvid = 0;
let vid;
let playing = false;
let angle = 0.0;
let jitter = 0.0;
var frames = 10;
let mouseBoxx;
let mouseBoxy;
let ballerina

function setup(){
  createCanvas(1810, 900, WEBGL);
  vid = createVideo(['assets/AIDANCING.mp4']);
  ballerina = loadModel('assets/ballerina.obj');
  
  for (let i = 0; i < howManydancingvids; i++){
  dancingvids[i] = new dancingvid();
  vid.play
  vid.loop();
  vid.hide();
    button = createButton('play');
  button.mousePressed(toggleVid);
 // stroke(0, 0, 0, 15);

  }


function toggleVid() {
  if (playing) {
    vid.pause();
    button.html('play');
  } else {
    vid.loop();
    button.html('pause');
  }
  playing = !playing;
}

}
function draw(){
 // background(0)
  //image(vid, 1810, 900);
image(vid, 100, 100, 200, 200);
image(vid, -500, -200, 200, 200);
image(vid, -910, 160, 500, 300);

push();
translate(width/2, height/2);
scale(3);
model(ballerina);
pop();



  //noCursor();
  for (let i = 0; i < howManydancingvids; i++){
    dancingvids[i].move();
    dancingvids[i].display();
  }
  //image(vid, mouseBoxx, mouseBoxy, 50, 80);
}

function mousePressed(){
  mouseBoxx = mouseX;
  mouseBoxy = mouseY;
  dancingvids[whichdancingvid].teleportdancingvid(mouseX, mouseY);
  dancingvids[whichdancingvid].makedancingvidVisible();
  whichdancingvid++;
  whichdancingvid = whichdancingvid % howManydancingvids;

}
class dancingvid {
  constructor(){
    this.x = width;
    this.y = height;
    this.xspeed = (0,5);
    this.yspeed = (0,5);
    this.visible = false;

  }
  display(){
    if (this.visible){
            //imageMode(CENTER);
   image(vid, this.x, this.y, 750, 705);
//rotateY(frameCount * .01);
translate(-900, -900, 10)

   image(vid, this.x, this.y, 750, 705);
//rotateY(frameCount * .01);
translate(-900, -900, 10)

 image(vid, this.x, this.y, 750, 705);
//rotateY(frameCount * .01);
translate(-900, -900, 10)


    }
  }
  move(){
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

    if ((this.x > width) || (this.x < 0)) {
      this.xspeed = this.xspeed * -1;
    }

    if ((this.y > height) || (this.y < 0)) {
      this.yspeed = this.yspeed * -1;
    }

    // if((this.x > mouseBoxx && this.x < (mouseBoxx + 50))&&(this.y > mouseBoxy && this.y < (mouseBoxy + 50))){
    //   this.xspeed = this.xspeed + 50;
    //   this.yspeed = this.yspeed + 50;
    // }

  }
  teleportdancingvid(xLoc, yLoc){
    this.x = xLoc;
    this.y = yLoc;
  }
  makedancingvidVisible(){
    this.visible = true;
  }
}