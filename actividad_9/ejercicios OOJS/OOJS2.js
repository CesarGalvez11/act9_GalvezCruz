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
  
  class Square extends Shape {
    constructor(sideLength) {
      super("square", 4, sideLength); // Llama al constructor de la clase padre (Shape) con los valores predeterminados
    }
  
    calcArea() {
      const area = this.sideLength ** 2; // Calcula el área del cuadrado
      console.log(`El área del cuadrado es: ${area}`);
    }
  }
  
  // Crear una instancia de la clase Square llamada square
  const square = new Square(5);
  square.calcPerimeter(); // Llama al método calcPerimeter() para calcular el perímetro del cuadrado
  square.calcArea(); // Llama al método calcArea() para calcular el área del cuadrado
  