class Car {
    constructor (color,convertible, speed, accelerate, decelerate) {
        this.color = color;
        this.convertible =  convertible;
        this.speed = 0;
    
    }

    accelerate (accelerate) {
        this.speed += accelerate;
    }

    decelerate (decelerate) {
        this.speed -= decelerate;
    }
}

module.exports = Car;