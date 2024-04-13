class Projectile {
    constructor() {
        this.velocity = { x: 0, y: 0 };
        this.angle = 45;
        this.power = 20;
        this.position = { x: 40, y: canvas.height - 25 };
        this.scale = 0.2;
        this.throwing = false;
        this.initialSpeed = { x: 0, y: 0 };
        this.ticks = 0;
        this.bounces = 0;
        this.lastCoordinates = { x: 0, y: 0 };
    }

    draw() {
        let haveToMoveX = canvas.width / 2 - this.position.x;
        if (this.position.x > canvas.width / 2) {
            ctx.save();

            ctx.translate(haveToMoveX, 0);
            this.lastCoordinates = { x: this.position.x, y: this.position.y };
        }

        ctx.fillStyle = 'black';
        ctx.font = '30px Arial';
        // Calculate x-coordinate for the text based on canvas width and the text's width
        const textWidth = ctx.measureText('Distance: ' + ((this.position.x - 40) / 100).toFixed(2) + ' M').width;
        let textX = canvas.width - textWidth - 40
        if (this.position.x > canvas.width / 2) {
            textX -= haveToMoveX
        }


        ctx.fillText('Distance: ' + ((this.position.x - 40) / 100).toFixed(2) + ' M', textX, 40);

        // Draw the ball
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();

        if(!this.throwing){
            ctx.beginPath();
            ctx.moveTo(this.position.x, this.position.y);
            const angleInRadians = this.angle * Math.PI / 180;
            const lineLength = 2 * this.power; // Adjust the length of the line as needed
            const endX = this.position.x + lineLength * Math.cos(angleInRadians);
            const endY = this.position.y - lineLength * Math.sin(angleInRadians);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = 'red'; // Color of the line indicating angle
            ctx.stroke();
            ctx.closePath();
        }
        // Draw a line indicating the angle of the projectile


        if (this.position.x > canvas.width / 2) {
            ctx.restore();
        }

    }

    update() {
        if (this.throwing) {
            if (this.ticks % 50 === 0) {
                if (this.velocity.x > 0) {
                    this.velocity.x *= 0.9;
                }
            }

            if (this.velocity.x < this.initialSpeed.x * 0.2) {
                this.velocity.x = this.velocity.x * 0.98

                if(this.velocity.x < 0.01){
                    this.velocity.x = 0;
                }
            }

            if (this.position.y <= canvas.height - 25) {
                this.velocity.y -= 0.4;
            }

            if(this.velocity.x <= 0){
                alert('You went ' + ((this.position.x - 40) / 100).toFixed(2) + ' M with ' + this.bounces + ' bounces!');
                this.reset();
            }

            // Calculate horizontal and vertical displacements
            const angleInRadians = this.angle * Math.PI / 180;
            const horizontalDisplacement = this.velocity.x * Math.cos(angleInRadians);
            const verticalDisplacement = this.velocity.y * Math.sin(angleInRadians);


            // Update position
            this.position.x += horizontalDisplacement;

            if (this.position.y <= canvas.height - 25) {
                this.position.y -= verticalDisplacement;


            } else if (this.position.y == 0) {
                console.log(gameOver)
            } else {
                if (this.getSpeed() > (this.initialSpeed.y * 0.6)) {
                    this.position.y = canvas.height - 25;
                    this.velocity.y *= -0.8; // Reverse vertical velocity with some loss
                    this.bounces++;
                }
            }

            this.ticks++;
        }

        this.draw();
    }

    shoot() {
        if (!this.throwing) {
            // Start throwing
            this.throwing = true;

            // Set initial velocity based on angle and power
            const angleInRadians = this.angle * Math.PI / 180;
            this.initialSpeed.x = Math.min(Math.max(this.power, 0), 100) * 0.5 * Math.cos(angleInRadians);
            this.initialSpeed.y = Math.min(Math.max(this.power, 0), 100) * 0.5 * Math.sin(angleInRadians);

            this.velocity.x = this.initialSpeed.x;
            this.velocity.y = this.initialSpeed.y;

            this.ticks = 0; // Reset ticks
        }
    }

    getSpeed() {
        // Return the total speed
        return Math.sqrt(Math.pow(this.velocity.x, 2) + Math.pow(this.velocity.y, 2));
    }

    reset() {
        this.velocity = { x: 1, y: 1 };
        this.angle = 45;
        this.power = 20;
        this.position = { x: 40, y: canvas.height - 25 };
        this.scale = 0.2;
        this.throwing = false;
        this.initialSpeed = { x: 0, y: 0 };
        this.ticks = 0;
        this.bounces = 0;
        this.lastCoordinates = { x: 0, y: 0 };
        this.update();
    }
}

