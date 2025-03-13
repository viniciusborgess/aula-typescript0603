//Exercicio 1
 
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

const meuCarro: Carro = {
    marca: "Ferrari",
    modelo: "La Ferrari",
    ano: 2025,
};  
console.log(meuCarro)

//Exercício 2
 
interface Multiplicacao {
    (a: number, b: number): number;
}
const multiplicacao: Multiplicacao = (x,y) => x * y;
console.log(multiplicacao(5,2))

//Exercicio 03
 
 function inverterArray<T>(array: T[]): T[] {
     return array.slice().reverse();
 }
 const numeros: number[] = [1,2,3,4,5];
 console.log(inverterArray(numeros)); //Resultado esperado [5,4,3,2,1]
 
 const palavras: string[] = ["Olá", "Mundo", "TypeScript"];
 console.log(inverterArray(palavras)); // Resultado esperado ["typescript", "mundo", "olá"]