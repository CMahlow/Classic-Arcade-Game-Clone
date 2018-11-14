let gameScore = 0,
	lives = 3,
	livesLeft = document.querySelector('.lives > span'),
	score = document.querySelector('.score > span');

// Enemies our player must avoid
class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
		this.y = y;
		this.movement = movement;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.movement * dt
    livesLeft.innerText = lives;

    // Begin over enemy on the left when user near the water
		if (this.x > 505) {
			this.x = -150;
      // enemy movement acceleration
			//New Feature (levels): *400-600 easy *700+ for hard
			this.movement = 150 + Math.floor(Math.random() * 800);
		}
    // Collision detection and put the player start from bottom
    		if (player.x < this.x + 60 &&
    			player.x + 37 > this.x &&
    			player.y < this.y + 25 &&
    			30 + player.y > this.y) {
    			player.x = 200;
    			player.y = 400;
    			lives--;
    			livesLeft.innerText = lives;
    			if (lives === 0) {
    				//Game Over message
    				confirm(`Game Over! Do you want to play again?`);
    				lives = 3;
    				gameScore = 0;
    				livesLeft.innerText = lives;
    				score.innerText = '';
    			}
    		}
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
