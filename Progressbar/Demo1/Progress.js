var bar ;
var particle_no = 25 ;
var counter = 0;
var Particles = [];
var ctx ;
var backgoundWidth,backgroundHeight ;


function setBar(value){
    bar = value
}


function setSizes(width , height){
    backgoundWidth = width;
    backgroundHeight = height;
}

function setCtx(value) {

    ctx = value;
}

function reset() {

    ctx.fillStyle = "#272822";
    ctx.fillRect(0, 0, backgoundWidth, backgroundHeight);
    ctx.fillStyle = "#171814";
    ctx.fillRect(25, 80, 350, 25);

}

function Progressbar() {
    this.widths = 0;
    this.hue = 0;

    this.draw = function() {

        ctx.fillStyle = Qt.hsla( bar.hue/350 , 1.0, 0.4, 1.0)
        ctx.fillRect(25, 80, this.widths, 25);
    }
}

function Particle() {
    this.x = 23 + bar.widths;
    this.y = 82;

    this.vx = 0.8 + Math.random() * 1;
    this.v = Math.random() * 5;
    this.g = 1 + Math.random() * 3;
    this.down = false;
    var size = Math.random() * 3;
    this.draw = function() {

        ctx.fillStyle = Qt.hsla( bar.hue/350 , 1.0, 0.4, 1.0)

        ctx.fillRect(this.x, this.y, size, size);


    }
}



function draw() {
    reset();
    counter++;

    bar.hue += 0.8;

    bar.widths += 2;
    if (bar.widths > 350) {
        if (counter > 215) {
            reset();
            bar.hue = 0;
            bar.widths = 0;
            counter = 0;
            Particles = [];
        } else {
            bar.hue = 126;
            bar.widths = 351;
            bar.draw();
        }
    } else {
        bar.draw();
        for (var i = 0; i < particle_no; i += 10) {
            Particles.push(new Particle());
        }
    }
    update();
}

function update() {
    for (var i = 0; i < Particles.length; i++) {
        var p = Particles[i];
        p.x -= p.vx;
        if (p.down == true) {
            p.g += 0.1;
            p.y += p.g;
        } else {
            if (p.g < 0) {
                p.down = true;
                p.g += 0.1;
                p.y += p.g;
            } else {
                p.y -= p.g;
                p.g -= 0.1;
            }
        }
        p.draw();
    }
}

