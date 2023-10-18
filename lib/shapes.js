// Parent Class
class Shape {
  constructor(text, textColor, shape, shapeColor) {
    if (text.length > 3) {
        throw new Error('Text must be 3 characters or less.');
      }

    this.text = text;
    this.textColor = textColor;
    this.Shape = shape;
    this.shapeColor = shapeColor;
  }

  render() {
    //returns a string for the corresponding SVG file with the given input.
    return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        SHAPE DETAILS HERE
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
  }
}

//Circle class with its dimensions
class Circle extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }

  render() {
    return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
  }
}

//Triangle class with its dimensions
class Triangle extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }

  render() {
    return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"> 
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
  }
}

//Square class with its dimensions
class Square extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }

  render() {
    return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"> 
        <rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
  }
}

module.exports = { Circle, Triangle, Square };
