// Enemies our player must avoid
var Enemy = function(startX, startY) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = startX;
    this.y = startY;
    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 505){
    	this.x++;
    }else {this.x = 0;}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
/********************Begin stuff Lynne Adds*******************/

var allEnemies = [];
//one bug each line.  complicated math makes them line up one on each row
	for (var index = 0; index < 3; index++) {
   		allEnemies[index] = new Enemy(0, ((index+1)*55)+(index*30));
}

var player = {sprite:'images/char-princess-girl.png',
				x: 200,
				y: 410,
				update: function(dt){},
				render:function(){
    				ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
				},
				src: 'images/char-princess-girl.png',
				handleInput: function(){}
};

/*/example of image that worked
window.onload = function() {
  var canvas = document.getElementById("e");
  var context = canvas.getContext("2d");
  var cat = document.getElementById("cat");
  context.drawImage(cat, 0, 0);
};*/


/********************End stuff Lynne Adds*******************/
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

