const renderShape = require('./shapes')

function generateLogo(data) {
    return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

    THIS COMES FROM SHAPE <circle cx="150" cy="100" r="80" fill="green" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text-color}">${data.text}</text>

    </svg>`
}

module.exports(generateLogo)