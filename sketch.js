let img

function preload(){
    img = loadImage('mario.png')
}

function setup(){
    createCanvas(1000, 1000)

}

function draw(){
    image(img, 0, 0)

}
