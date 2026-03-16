//1

// function triangulo(lado1, lado2, lado3) {
//   if (lado1 == lado2 && lado2 == lado3 && lado3 == lado1) {
//     return "Equilátero";
//   } else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
//     return "Isósceles";
//   } else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
//     return "Escaleno";
//   }
// }
// console.log(`A classificação deste triangulo é ${triangulo(5, 5, 5)}`);

//2
// O .replace() em JavaScript é um método usado para substituir uma parte de uma string por outra.

// function convert(num1) {
//   if (!Number.isInteger(num1)) {
//     console.log(`R$${num1.toFixed(2).replace(".", ",")}`);
//   }
// }
// convert(15.5676);

//3
function jurosSimples(capital, taxa, tempo) {
    let montante = capital * (1 + taxa * tempo);
    return montante;
}

function jurosCompostos(capital, taxa, tempo) {
    let montante = capital * Math.pow((1 + taxa), tempo);
    return montante;
}


console.log("Juros Simples: " + jurosSimples(1000, 0.05, 2)); // 1100
console.log("Juros Compostos: " + jurosCompostos(1000, 0.05, 2)); // 1102.5

//4

// function divisivel(number) {
//   if (number % 3 == 0) {
//     return "True";
//   } else {
//     return "False";
//   }
// }
// console.log(divisivel(1));

//5
function maiorEMenor(vetor) {
    let maior = Math.max(...vetor);
    let menor = Math.min(...vetor);
    return { maior, menor };
}
let numeros = [5, 12, 3, 7, 20];
let resultado = maiorEMenor(numeros);
console.log("Maior:", resultado.maior); // 20
console.log("Menor:", resultado.menor); // 3
