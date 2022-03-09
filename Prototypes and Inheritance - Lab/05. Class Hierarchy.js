function hierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }
        changeUnits(value) {
            this.units = value;
        }
        metricConversion(num) {
            if (this.units === 'm') return num /= 10;
            if (this.units === 'mm') return num *= 10;
            return num;
        }
        toString() {
            if (this.hasOwnProperty('radius')) {
                return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
            }
            if (this.hasOwnProperty('width')) {
                return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
            }
        }
    }
    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }
        get area() {
            this.radius = this.metricConversion(this._radius);
            return Math.PI * Math.pow(this.radius, 2);
        }
    }
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }
        get area() {
            this.width = this.metricConversion(this._width);
            this.height = this.metricConversion(this._height);
            return this.width * this.height;
        }
    }
    return { Figure, Circle, Rectangle };
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, "mm");
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits("cm");
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits("mm");
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
