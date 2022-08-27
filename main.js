headX = 0;
headY = 0;


function preload() {
 head = loadImage('https://i.postimg.cc/tJcSLYYd/istockphoto-1134104922-612x612-removebg-preview.png');
}

function setup(){
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}
function modelLoaded() {
  console.log("Connection is established! ! !");
}

function gotPoses(results) {
  if(results.length > 0){
  console.log(results);
  headX = results[0].pose.nose.x;
  headY = results[0].pose.nose.y;
  console.log("The x position of head is " + headX);
  console.log("The y position of head is" + headY);
  }
}

function take_snapshot() {
  save("My_Snapshot.jpg")
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(head, headX, headY, 50, 50)
}
