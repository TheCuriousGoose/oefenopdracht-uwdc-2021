const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

canvas.height = 640;
canvas.width = 1000;

let throws = 0; // Counter for the number of throws

const projectile = new Projectile();

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    projectile.update();
}

function handleInput(event) {
    // Start throwing on spacebar press
    if (event.key === ' ' && !projectile.throwing) {
        projectile.shoot();
        throws++;
    }

    if (!projectile.throwing) {
        // Update angle with arrow keys
        if (event.key === 'ArrowUp' && projectile.angle < 90) {
            projectile.angle++;
        } else if (event.key === 'ArrowDown' && projectile.angle > 0) {
            projectile.angle--;
        }

        // Update power with arrow keys
        if (event.key === 'ArrowRight' && projectile.power < 100) {
            projectile.power++;
        } else if (event.key === 'ArrowLeft' && projectile.power > 0) {
            projectile.power--;
        }

    }
}

document.addEventListener('keydown', handleInput);

animate();


