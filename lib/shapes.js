// Exports `Triangle`, `Circle`, and `Square` classes

class Shape {
    constructor(text,textColor,shape,shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.Shape = shape;
        this.shapeColor = shapeColor;
    }

    render() {
        //returns a string for the corresponding SVG file with the given shape color.
        return `
        <svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
    
        SHAPE DETAILS HERE
    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    
        </svg>`
    }
}

class Circle extends Shape {
    constructor(text,textColor,shape,shapeColor) {
        super(text,textColor,shape,shapeColor)
    }
    
    render() {
        return `
        <svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
         
         <circle cx="150" cy="100" r="80" fill="${shapeColor} />
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    
        </svg>`
    }
}

class Triangle extends Shape {
    constructor(text,textColor,shape,shapeColor) {
        super(text,textColor,shape,shapeColor)
    }

    render() {
        return `
        <svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg"> 

         <polygon points="150, 18 244, 182 56, 182" fill="blue" />
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
         </svg>`
    }
}

class Square extends Shape {
    constructor(text,textColor,shape,shapeColor) {
        super(text,textColor,shape,shapeColor)
    }

    render() {
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"> 
        
        <rect x="75" y="175" width="150" height="150" fill="transparent"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
         </svg>`
    }
}

module.exports = Circle, Triangle, Square

