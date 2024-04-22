class Shape {
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
  
    calcPerimeter() {
      const perimeter = this.sides * this.sideLength;
      console.log(`El perímetro del ${this.name} es: ${perimeter}`);
    }
  }
  
  // Crear una instancia de Shape llamada square
  const square = new Shape("square", 4, 5);
  square.calcPerimeter(); // Llama al método calcPerimeter() para calcular el perímetro
  
  // Crear una instancia de Shape llamada triangle
  const triangle = new Shape("triangle", 3, 3);
  triangle.calcPerimeter(); // Llama al método calcPerimeter() para calcular el perímetro
  