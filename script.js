

// ------------------------------------------------------- atividade sobre a frase no console 7/10

// const nome = "Felipe";
// const idade1 = 15;
// const cidade = "Cambé";
// const leitor = "Japopô";
// const frase = `Salve ${leitor}, sou o ${nome}, tenho ${idade1} e moro em ${cidade}.`;
// const idadeEmDias = idade1 * 365;
// const idadeEmMeses = idade1 * 12;
// const escola = "Helena Kolody"




// console.log(frase);
// console.log("Minha idade em dias é: " + idadeEmDias);
// console.log("Minha idade em meses é:" + idadeEmMeses);
// console.log("Olá professor rei da resenha boa, meu nome é " + nome + ". tenho " + idade1 +  " anos. A cidade onde nasci, cresci e moro atualmente é " + cidade + ". Sou amigo do "+ leitor + ", O japonês mais neguinho do Brasil, " + "estudo na escola " + escola + ", e como curiosidade, minha idade em meses é "+ idadeEmMeses + ".")

// --------------------------------------- Atividade usando preços e matemática

// const precounit = 20;
// const qntd = 7;
// const subtotal = precounit * qntd;
// const valorMinNecessario = 100;
// const temDesconto = subtotal >= valorMinNecessario;
// const cidadecliente = "Rolândia";
// const cidadeloja = "São_Paulo";
// const freteGratis = temDesconto && (cidadecliente == cidadeloja);

// const resultado = `Subtotal: R$ ${subtotal}
// Tem desconto: ${temDesconto}
// Frete Grátis: ${freteGratis}`

// console.log(subtotal);
// console.log(temDesconto);
// console.log(freteGratis);
// console.log(resultado);

// ----------------------------------------------- Introdução aos comandos condicionais 14/10

// const idade2 = 15;

// if (idade2 > 18){
//     console.log("Maior de idade");

// } else if(idade2 <= 17 && idade2 > 0){
//     console.log("Menor de idade");

// } else {
//     console.log("idade inválida")
// }

// console.log("Escolha uma matéria: \n1 - geografia; \n2 - Matematica; \n3 - quimica.")

// const materia = "2";

// switch(materia){
//     case "1":
//         console.log("materia ruimzinha");
//         break
//     case "2":
//         console.log("materia da boa");
//         break
//     case "3":
//         console.log("pior materia que tem");
//         break
//     default:
//         console.log("materia indisponivel")    
// }

// ------------------------------------------ atividade de if e else

// const idadeAtividade = 33

// if (idadeAtividade <= 11){
//     console.log("Criança");

// } else if (idadeAtividade <= 17){
//     console.log("Adolescente");

// }else if (idadeAtividade <= 59){
//     console.log("Adulto");

// } else if (idadeAtividade > 59){
//     console.log("Idoso");

// } else {
//     console.log("Idade invalida")
// }

// Criança: entre 0 e 11
// Adolescente: entre 12 e 17
// Adulto: entre 18 e 59
// Idoso: 60+

//------------------------------------------------- Atividade 2 

// const pontosCliente = 10000
// const mesesSendoCliente = 25
// const anosSendoClientes = mesesSendoCliente / 12

// if(pontosCliente <= 99){
//     console.log("Rank bronze");

// } else if(pontosCliente <= 499){
//     console.log("Rank prata");

// } else if(pontosCliente <= 999){
//     console.log("Rank ouro");

// } else if(pontosCliente > 999 && anosSendoClientes >= 1){
//     console.log("Rank diamante");
// }


// ------------------------------------------------ Aula sobre loops 21/10

// usando for:

// for(let i = 1; i <= 10; i++) {
//     if (i % 2 > 0){
//         console.log(i)
//     }
// }


// for( let number = 5; number <= 50; number++ ) {
//     if(number % 5 == 0){
//         console.log(number)

//     }
// }


// let numeroBase = 3
// for ( let numeroMultiplicador = 1; numeroMultiplicador <= 10; numeroMultiplicador++){
//     console.log(`${numeroBase} X ${numeroMultiplicador} = ${numeroBase * numeroMultiplicador}`)
// }

// for ( let i = 1; i <= 10; i++){
//     for( let j = 1; j <= 10; j++)
//       console.log(`${i} X ${j} = ${i * j}`)  
// }

// ----------------------------------- usando while:

// let tentativas = 3 
// while ( tentativas > 0){
//     console.log(`Você tem ${tentativas} tentativas restantes`)
//     tentativas--;
// }


// do {console.log(`Você tem ${tentativas} tentativas restantes`)
//     tentativas--;
// } while ( tentativas > 0)

//---------------------------------------------- Funções e Escopo aula 28/10

function dizerOi(nome, idade) {
    return `Olá meu nome é ${nome}, e eu tenho ${idade} anos`
}

console.log(dizerOi("Felipe", 18));

function somar (n1, n2){
    return n1 + n2
}

console.log(somar(33, 11 ))

let nomedeUsuario = "Felipe"
let idadeUsuario = 15

function apresentacao (nomedeUsuario, idadeUsuario) {
    return `Me chamo ${nomedeUsuario}, e tenho ${idadeUsuario}`
}


console.log(apresentacao(nomedeUsuario, idadeUsuario))

//------------------------------------- atividade sobre imc

let peso = 75;
let alturaM = 1.88;
let resultadoIMC = calcular_IMC(peso, alturaM)

function calcular_IMC(peso, alturaM) {
    return peso/alturaM**2
}

console.log (calcular_IMC(peso, alturaM));

// ------------ A minha atividade


// if (resultadoIMC <= 18.5){
//     console.log(" Você é magro demais")
// } else if (resultadoIMC <= 24.9){
//     console.log ("Você tem o peso normal")
// } else if (resultadoIMC <= 29.9){
//     console.log( " Você é sobrepeso")
// } else if (resultadoIMC <= 35){
//     console.log (" Você é obeso")
// } else if (resultadoIMC > 35 ) {
//     console.log ("Você tem a barriga muito boa")
// } else console.log(erro);

function classificacao(resultadoIMC) {
    if (resultadoIMC <= 18.5){
    console.log (" Você é magro demais")
} else if (resultadoIMC <= 24.9){
    console.log ("Você tem o peso normal")
} else if (resultadoIMC <= 29.9){
    console.log ( " Você é sobrepeso")
} else if (resultadoIMC <= 35){
    console.log (" Você é obeso")
} else if (resultadoIMC > 35 ) {
    console.log ("Você tem a barriga muito boa")
} else console.log(erro);
};

console.log(classificacao(resultadoIMC))