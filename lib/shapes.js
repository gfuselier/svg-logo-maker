// Exports `Triangle`, `Circle`, and `Square` classes

class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
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
    constructor(shapeColor) {
        super(shapeColor)
    }
    
    render() {
        return `<circle cx="150" cy="100" r="80" ${setColor} />`
    }
}

class Triangle extends Shape {
    
    '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
}

class Square extends Shape {
    
    '<rect x="75" y="175" width="150" height="150" fill="transparent"/>'
}

module.exports = Circle, Triangle, Square

//class Triangle {
    // ConstructorType(text,textColor,shape,shapeColor) {
    //     this.text = text
    // }

    //render() needs to be the svg return here. take generate logo and put in the method
