// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    this.x=x;
    this.y=y;
    this.speed=speed;
    // this.counter=counter;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};
// setInterval(function(){
//     var xx=0;
//     enemy0.update(xx++)
// }, 1000);
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x*101, this.y*83);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y,speed,counter) {
    Enemy.call(this,x,y,speed);
    this.sprite = 'images/char-boy.png';
};
Player.prototype.update = function(dt) {
    console.log("dt", dt)
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x*101, this.y*83);
};
Player.prototype.handleInput = function(e) {
    switch(e){
        case "left": {
            let xdirection = this.x<1?this.x:this.x--;
            player.update(xdirection);
            console.log(e);
            break;
        };
        case "right": {
            let xdirection = this.x>3?this.x:this.x++;
            player.update(xdirection);
            break;
        };
        case "up": {
            let ydirection = this.y<1?this.y:this.y--;
            player.update(ydirection);
            console.log(e);
            break;
        };
        case "down": {
            let ydirection = this.y>4?this.y:this.y++;
            player.update(ydirection);
            console.log(e);
            break;  
        };
        default: {
            alert("press arrow keys")
        }
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy0=new Enemy(0,1,1,1);
// var enemy1=new Enemy(0,2,2);
// var enemy2=new Enemy(0,3,3);
// var enemy3=new Enemy(0,4,4);
var allEnemies=[enemy0];
// Place the player object in a variable called player

var player = new Player(2,5,1,1);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
