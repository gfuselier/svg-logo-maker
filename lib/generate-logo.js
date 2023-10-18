//Imports shape classes
const {Circle, Triangle, Square} = require('./shapes')

//makes new instance of shape class to generate logo
function generateLogo(data) {
    const {text, textColor, shape, shapeColor} = data
    
    if (shape === 'circle') {
        let logo = new Circle(text, textColor, shape, shapeColor)
        return logo.render()
    } else if (shape === 'triangle') {
        let logo = new Triangle(text, textColor, shape, shapeColor)
        return logo.render()
    } else {
        let logo = new Square(text, textColor, shape, shapeColor)
        return logo.render()
    }

}

module.exports = generateLogo

