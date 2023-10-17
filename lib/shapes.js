// Exports `Triangle`, `Circle`, and `Square` classes
class Shape {
    constructor() {

    }

    setColor() {

    }

    render() {
        //returns a string for the corresponding SVG file with the given shape color.
        //ex: <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        return ``
    }
}

class Circle extends Shape {
    
    <circle cx="150" cy="100" r="80" fill="green" />
}

class Triangle extends Shape {
    
    <polygon points="150, 18 244, 182 56, 182" fill="blue" />
}

class Square extends Shape {
    
    <polygon points="150, 18 244, 182 56, 182" fill="blue" />
}

module.exports(Circle, Triangle, Square)