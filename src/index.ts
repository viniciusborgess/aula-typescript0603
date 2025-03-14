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
 
 /*function inverterArray<T>(array: T[]): T[] {
     return array.slice().reverse();
 }
 const numeros: number[] = [1,2,3,4,5];
 console.log(inverterArray(numeros)); //Resultado esperado [5,4,3,2,1]
 
 const palavras: string[] = ["Olá", "Mundo", "TypeScript"];
 console.log(inverterArray(palavras)); // Resultado esperado ["typescript", "mundo", "olá"]

 interface Repositorio<T> {
     salvar(dado: T): void;
     obterTodos(): T[];
 }
 class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
     private usuarios: { nome: string; email: string }[] = [];
     salvar(dado: { nome: string; email: string }): void {
         this.usuarios.push(dado);
     }
     obterTodos(): { nome: string; email: string }[] {
         return this.usuarios;
     }
 }
 // Teste da implementação
 const repo = new UsuarioRepositorio();
 repo.salvar({ nome: "João", email: "joao@email.com" });
 repo.salvar({ nome: "Maria", email: "maria@email.com" });
 console.log("Lista de usuários:", repo.obterTodos());*/



 //Exercicio 04

 interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];
    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }
    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}
// Teste da implementação
const repo = new UsuarioRepositorio();
repo.salvar({ nome: "João", email: "joao@email.com" });
repo.salvar({ nome: "Maria", email: "maria@email.com" });
console.log("Lista de usuários:", repo.obterTodos());


//Exercicio 05

console.log("Lista de usuários:", repo.obterTodos());
 
 
 /**
  * 3. Manipulação Avançada de Tipos
  * Exercício 5
  * 
  * @description Crie um Type Alias chamado RespostaServidor, que pode ser uma string ou um boolean.
  * @description Depois, crie uma função chamada processarResposta que recebe um valor desse tipo e imprime uma mensagem no console dependendo do valor passado.
  * 
  */
 
 type RespostaServidor = string | boolean;
 function processarResposta(resposta: RespostaServidor): void {
     if (typeof resposta === "string") {
         console.log(`Resposta do servidor: ${resposta}`);
     } else if (typeof resposta === "boolean") {
         console.log(`Operação foi bem-sucedida? ${resposta ? "Sim" : "Não"}`);
     }
 }
 processarResposta("Dados processados com sucesso!");
 processarResposta(true);
 processarResposta(false);

 processarResposta(false);
 
 /**
  * Exercício 6
  * 
  * @description Utilizando Intersection Types, crie um tipo EstudanteTrabalhador, que una as propriedades de um Estudante (nome e curso) e de um Trabalhador (empresa e cargo).
  * @description Depois, crie um objeto que represente um estudante que também trabalha e exiba os dados no console.
  * 
  * 
  */
 
 type Estudante = {
     nome: string;
     curso: string;
 };
 type Trabalhador = {
     empresa: string;
     cargo: string;
 };
 type EstudanteTrabalhador = Estudante & Trabalhador;
 const estudanteTrabalhador: EstudanteTrabalhador = {
     nome: "Guilherme",
     curso: "Engenharia de Software",
     empresa: "FIAP",
     cargo: "Desenvolvedor Júnior"
 };
 console.log("Estudante Trabalhador:", estudanteTrabalhador);


 