const {Circle, Triangle, Square} = require('./shapes')

function generateLogo(data) {
    const {text, textColor, shape, shapeColor} = data
    
    if (shape === 'circle') {
        let logo = new Circle(text, textColor, shape, shapeColor)
        logo.render()
    } else if (shape === 'triangle') {
        let logo = new Triangle(text, textColor, shape, shapeColor)
        logo.render()
    } else {
        let logo = new Square(text, textColor, shape, shapeColor)
        logo.render()
    }

}

module.exports = generateLogo

