// Enemies our player must avoid
var Enemy = function(startX, startY) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = startX;
    this.y = startY;
    this.collide = function(){
		if (((this.y > player.y - 30) && (this.y < player.y + 30))&&
		((this.x > player.x - 50) && (this.x < player.x + 30)))
		{
		player.x = 200;
		player.y = 415;
		}
    };
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 505){
		this.x = (this.x + dt*75);
		this.collide();
    }else {this.x = Math.floor(Math.random() * (-600)) - 100;}// recycle bugs to stage left
};

// Draw the enemy on the screen, required method for game

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
//one bug each line.  complicated math makes them line up one on each row with a starting x between -100 and -500
	for (var index = 0; index < 3; index++) {
   		allEnemies[index] = new Enemy(Math.floor(Math.random() * (-600)) - 100, ((index+1)*55)+(index*30));
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

/*Working version of player, but did not meet specifications because she is not an object;-P
 See new version below
var player = {sprite:'images/char-princess-girl.png',
				x: 200,
				y: 415,
				update: function(dt){},//sometimes after assembly, there are extra parts.  This function does not do anything.
				render:function(){
    				ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
				},
				src: 'images/char-princess-girl.png',
				handleInput: function(direction){
		//Dont allow player to leave the canvas
				if (((player.y < 83) && (direction === "up"))||
					((player.y > 414) && (direction === "down"))||
					((player.x < 0) && (direction === "left"))||
					((player.x > 400) && (direction === "right")))

				{
					return;//out of bounds move requested, not allowed
				}
		//Move the player one space per arrow key used			
					if (direction === "up"){
							player.y = player.y - 83;
								}
					else if (direction === "down"){
							player.y = player.y + 83;	
								}			
					else if (direction === "right"){
							player.x = player.x + 101;	
								}
					else if (direction === "left"){
							player.x = player.x - 101;	
								}
				}
};
*/

var Player = function(playerimage) {

    this.sprite = playerimage;
    this.x = 200;
    this.y = 415;

    };

var player = new Player('images/char-princess-girl.png');
				
	Player.prototype.update = function(dt){},//sometimes after assembly, there are extra parts.  This function does not do anything.
	Player.prototype.render = function(){
    	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
				},
	
	player.handleInput = function(direction){
		//Dont allow player to leave the canvas
				if (((player.y < 83) && (direction === "up"))||
					((player.y > 414) && (direction === "down"))||
					((player.x < 0) && (direction === "left"))||
					((player.x > 400) && (direction === "right")))

				{
					return;//out of bounds move requested, not allowed
				}
		//Move the player one space per arrow key used			
					if (direction === "up"){
							player.y = player.y - 83;
								}
					else if (direction === "down"){
							player.y = player.y + 83;	
								}			
					else if (direction === "right"){
							player.x = player.x + 101;	
								}
					else if (direction === "left"){
							player.x = player.x - 101;	
								}
			};

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

