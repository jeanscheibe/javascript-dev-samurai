// Métodos de classes

// Método são ações ou funções que esse objeto consegue executar
// Os métodos definem o nosso modelo
// adicionar apenas métodos úteis

class Dog {
  name: string = "";
  weight: number = 0;
  color: string = "";
  breed: string = "";
  size: number = 0;

  constructor(
    name: string,
    weight: number,
    color: string,
    breed: string,
    size: number
  ) {
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
    this.size = size;
  }

  bark(): void {
    console.log("Au-au");
  }

  hear(noise: string): void {
    if (noise === this.name) {
      this.bark();
    }
  }
}
