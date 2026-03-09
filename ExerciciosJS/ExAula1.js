//Exe-1
//let num1 = 4
//let num2 = 3

//let soma = num1+num2
//let sub = num1-num2
//let div = num1/num2
//let mult = num1*num2

//console.log(`Soma = ${soma} Subtração =${sub} Divisão =${div} Multiplicação=${mult}`)

//Exe - 2;
/*for (let index = 0; index < 100; index++) {
  if (index % 2 == 1) {
    console.log(index);
  }
}*/

//Exe -3
/*let palavra = "Disciplina de programação para web";

console.log(`Quantidade de caracteres ${palavra.length}`);*/

//Exe -4
//let nome = "Pedro Cardoso Lima"
//let lista = nome.split(' ')

//console.log(lista[0]+lista[2]+"@gmail.com");

//------------------------------

//Exe -5
/*for (let index = 0; index <= 10; index++) {
    if (index<= 9) {
        console.log(index + "-");
    }else{
       console.log(index);
    }
}*/

//Exe -6

/*function dobro(a) {
    if (a<=0) {
        return "So e aceito numeros positivos maiores que zero"
    }
    return a+a
}
console.log(dobro(3))*/

//ex -7
//Reverse()inverte a ordem do array
//join()junta tudo em um array
/*function inverterString(texto) {
  return texto.split("").reverse().join("");
}

console.log(inverterString("Pedro")); // ordeP*/
//ex -8
/*function contarVogais(texto) {
    let vogais = "aeiou";
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}
console.log(contarVogais("programacao")); */
//ex -9
/*function validarEmail(email) {
    let partes = email.split("@");

    if (partes.length !== 2) {
        return false;
    }

    if (partes[1].includes(".")) {
        return true;
    }

    return false;
}

console.log(validarEmail("teste@email.com")); // true
console.log(validarEmail("teste@email")); // false
*/

// -10
/*function ehPalindromo(texto) {
    let invertida = texto.split('').reverse().join('');
    return texto === invertida;
}

console.log(ehPalindromo("arara")); // true
console.log(ehPalindromo("casa"));  // false*/
