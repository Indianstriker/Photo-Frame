function preload() {

}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.position(70, 70);
    video = createCapture(VIDEO);
    video.hide();
}

function take_snapshot() {
    save('student_name.png');
}

function draw() {
   
    fill(255, 255, 255);
    rect(80, 80, 400, 400);

    fill(0, 255, 255);
    circle(80, 80, 30);

    fill(0, 255, 255);
    circle(170, 80, 30);

    fill(0, 255, 255);
    circle(270, 80, 30);

    fill(0, 255, 255);
    circle(370, 80, 30);

    fill(0, 255, 255);
    circle(470, 80, 30);

    fill(0, 255, 255);
    circle(470, 80, 30);

    // Next line

    fill(0, 255, 255);
    circle(80, 180, 30);

    fill(0, 255, 255);
    circle(80, 270, 30);

    fill(0, 255, 255);
    circle(80, 370, 30);

    fill(0, 255, 255);
    circle(80, 470, 30);

    fill(0, 255, 255);
    circle(80, 570, 30);

    fill(0, 255, 255);
    circle(80, 570, 30);

     // Next line

     fill(0, 255, 255);
     circle(470, 80, 30);
 
     fill(0, 255, 255);
     circle(470, 170, 30);
 
     fill(0, 255, 255);
     circle(470, 270, 30);
 
     fill(0, 255, 255);
     circle(470, 370, 30);
 
     fill(0, 255, 255);
     circle(470, 470, 30);
 
     fill(0, 255, 255);
     circle(470, 470, 30);

       // Next line

    fill(0, 255, 255);
    circle(470, 470, 30);

    fill(0, 255, 255);
    circle(470, 470, 30);

    fill(0, 255, 255);
    circle(370, 470, 30);

    fill(0, 255, 255);
    circle(270, 470, 30);

    fill(0, 255, 255);
    circle(170, 470, 30);

    fill(0, 255, 255);
    circle(80, 470, 30);

    image(video, 100, 100, 350, 350);
}