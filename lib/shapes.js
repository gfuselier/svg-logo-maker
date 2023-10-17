// Exports `Triangle`, `Circle`, and `Square` classes

class Shape {
    constructor(shapeColor) {

    }

    setColor() {
        return `fill="${shapeColor}"`
    }

    render() {
        //returns a string for the corresponding SVG file with the given shape color.
        //ex: <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        return `<shape dimensions ${setColor}/>`
    }
}

class Circle extends Shape {
    
    <circle cx="150" cy="100" r="80" fill="green" />
}

class Triangle extends Shape {
    
    <polygon points="150, 18 244, 182 56, 182" fill="blue" />
}

class Square extends Shape {
    
    <rect x="75" y="175" width="150" height="150" fill="transparent"/>
}

module.exports(Circle, Triangle, Square)