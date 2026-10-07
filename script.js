

// atividade sobre a frase no console

const nome = "Felipe";
const idade = 15;
const cidade = "Cambé";
const leitor = "Japopô";
const frase = `Salve ${leitor}, sou o ${nome}, tenho ${idade} e moro em ${cidade}.`;
const idadeEmDias = idade * 365;
const idadeEmMeses = idade * 12;
const escola = "Helena Kolody"

console.log(frase);
console.log("Minha idade em dias é: " + idadeEmDias);
console.log("Minha idade em meses é:" + idadeEmMeses);
console.log("Olá professor rei da resenha boa, meu nome é " + nome + ". tenho " + idade +  " anos. A cidade onde nasci, cresci e moro atualmente é " + cidade + ". Sou amigo do "+ leitor + ", O japonês mais neguinho do Brasil, " + "estudo na escola " + escola + ", e como curiosidade, minha idade em meses é "+ idadeEmMeses + ".")

// Atividade usando preços e matemática

const precounit = 20;
const qntd = 7;
const subtotal = precounit * qntd;
const valorMinNecessario = 100;
const temDesconto = subtotal >= valorMinNecessario;
const cidadecliente = "Rolândia";
const cidadeloja = "São_Paulo";
const freteGratis = temDesconto && (cidadecliente == cidadeloja);

const resultado = `Subtotal: R$ ${subtotal}
Tem desconto: ${temDesconto}
Frete Grátis: ${freteGratis}`

console.log(subtotal);
console.log(temDesconto);
console.log(freteGratis);
console.log(resultado)






