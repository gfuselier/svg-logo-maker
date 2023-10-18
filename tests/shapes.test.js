// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const { Circle, Triangle, Square } = require("../lib/shapes");

describe("Circle", () => {
  describe("Render", () => {
    it("should return a string for the corresponding SVG file with the given input when the colors are keywords", () => {
      const circle = new Circle("ABC", "blue", "circle", "orange");
      const renderShape = circle.render();
      const svgString = `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="orange" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ABC</text>
        </svg>`;

      expect(renderShape).toEqual(svgString);
    });
    it("should return a string for the corresponding SVG file with the given input when the colors are hexadecimals", () => {
        const circle = new Circle("ABC", "#0000ff", "circle", "#ffa500");
        const renderShape = circle.render();
        const svgString = `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="#ffa500" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="#0000ff">ABC</text>
        </svg>`;
  
        expect(renderShape).toEqual(svgString);
      });
  });
})

describe("Triangle", () => {
  describe("Render", () => {
    it("should return a string for the corresponding SVG file with the given input when the colors are keywords", () => {
        const triangle = new Triangle("ABC", "blue", "triangle", "orange");
        const renderShape = triangle.render();
        const svgString = `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"> 
        <polygon points="150, 18 244, 182 56, 182" fill="orange" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ABC</text>
        </svg>`;

        expect(renderShape).toEqual(svgString);
        });
        it("should return a string for the corresponding SVG file with the given input when the colors are hexadecimals", () => {
        const triangle = new Triangle("ABC", "#0000ff", "circle", "#ffa500");
        const renderShape = triangle.render();
        const svgString = `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"> 
        <polygon points="150, 18 244, 182 56, 182" fill="#ffa500" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="#0000ff">ABC</text>
        </svg>`;

        expect(renderShape).toEqual(svgString);
        });
    });
});

describe("Square", () => {
    describe("Render", () => {
      it("should return a string for the corresponding SVG file with the given input when the colors are keywords", () => {
          const square = new Square("ABC", "blue", "square", "orange");
          const renderShape = square.render();
          const svgString = `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"> 
        <rect x="75" y="25" width="150" height="150" fill="orange"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ABC</text>
        </svg>`;
  
          expect(renderShape).toEqual(svgString);
          });
          it("should return a string for the corresponding SVG file with the given input when the colors are hexadecimals", () => {
          const square = new Square("ABC", "#0000ff", "circle", "#ffa500");
          const renderShape = square.render();
          const svgString = `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"> 
        <rect x="75" y="25" width="150" height="150" fill="#ffa500"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="#0000ff">ABC</text>
        </svg>`;
  
          expect(renderShape).toEqual(svgString);
          });
      });
  });

