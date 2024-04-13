function projectileCoordinates() {
    let tick = 1;
    let x = horizontalSpeed * tick;
    let y = verticalSpeed * tick - 0.5 * GRAVITY * (tick * tick);

    const coordinates = { x, y };

    while (y > 0) {
        tick++;
        x = horizontalSpeed * tick;
        y = verticalSpeed * tick - 0.5 * GRAVITY * (tick * tick);
    }

    return coordinates;
}
