// importing from file

const {Circle, Triangle, Square} = require("./shapes.js");

// running tests

describe("Circle", () => {
    test("renders circle element correctly", () => {
        const expectedSVG = `<circle cx="50%" cy="50%" r="100" height="100" width="100" fill="pink" />`
        const circle = new Circle();
        circle.setColor("pink");
        const actualSVG = circle.render();
        expectedSVG(actualSVG).toEqual(expectedSVG);
    })

    test("correctly displays chosen fill color", () => {
        const expectedSVG = `<circle cx="50%" cy="50%" r="100" height="100" width="100" fill="pink" />`
        const circle = new Circle();
        circle.setColor("pink");
        const actualSVG = circle.render();
        expectedSVG(actualSVG).toEqual(expectedSVG);
    })
});

describe("Triangle", () => {
    test("renders triangle element correctly", () => {
        const expectedSVG = `<polygon points="150, 18, 244, 182, 56, 182" fill="green" />`
        const triangle = new Triangle();
        triangle.setColor("green");
        const actualSVG = triangle.render();
        expectedSVG(actualSVG).toEqual(expectedSVG);
    })

    test("correctly displays chosen fill color", () => {
        const expectedSVG = `<polygon points="150, 18, 244, 182, 56, 182" fill="green" />`
        const triangle = new Triangle();
        triangle.setColor("green");
        const actualSVG = triangle.render();
        expectedSVG(actualSVG).toEqual(expectedSVG);
    })
});

describe("Square", () => {
    test("renders square element correctly", () => {
        const expectedSVG = `<rect x="90" y="70" width="100" height="100" fill="blue" />`
        const square = new Square();
        square.setColor("blue");
        const actualSVG = square.render();
        expectedSVG(actualSVG).toEqual(expectedSVG);
    })

    test("correctly displays chosen fill color", () => {
        const expectedSVG = `<rect x="90" y="70" width="100" height="100" fill="blue" />`
        const square = new Square();
        square.setColor("blue");
        const actualSVG = square.render();
        expectedSVG(actualSVG).toEqual(expectedSVG);
    })
});