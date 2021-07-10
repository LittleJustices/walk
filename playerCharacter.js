function playerCharacter(speed) {
    let moving = false;
    let startingPos = vec2(0, 0);
    let moveVector = vec2(0, 0);
    let moveProgress = 0;
    return {
        facing : "left",
        speed : speed,
        takeStep(movement) {
            startingPos = this.pos;
            moving = true;
            moveVector = movement;
        },
        isMoving() {
            return moving;
        },
        update() {
            if (moving) {
                moveProgress = Math.min(1, moveProgress + dt() * this.speed);
                this.pos = startingPos.add(moveVector.scale(moveProgress));
                if (moveProgress == 1) {
                    moving = false;
                    startingPos = vec2(0, 0);
                    moveVector = vec2(0, 0);
                    moveProgress = 0;
                }
            }
        },
    };
}