const {Circle, Triangle, Square} = require('./shapes')
const {text, textColor, shape, shapeColor} = data

function generateLogo(data) {
    if (shape == 'circle') {
        let logoShape = new Circle(shapeColor)
    } else if (shape == 'triangle') {
        let logoShape = new Triangle(shapeColor)
    } else {
        let logoShape = new Square(shapeColor)
    }

    return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

    ${logoShape}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

    </svg>`
}

module.exports(generateLogo)