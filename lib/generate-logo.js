const {Circle, Triangle, Square} = require('./shapes')

function generateLogo(data) {
    const {text, textColor, shape, shapeColor} = data
    
    if (shape == 'circle') {
        let logoShape = new Circle(shapeColor)

        return 

    } else if (shape == 'triangle') {
        let logoShape = new Triangle(shapeColor)
    } else {
        let logoShape = new Square(shapeColor)
    }

}

module.exports = generateLogo

//if shape = triangle {let triangle = new Triangle(text, textColor, shape, shapeColor)}