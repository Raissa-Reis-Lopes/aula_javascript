// para fazer comentários e /* treecho *\ para comentar um trecho









//function funcaoChange(elemento){
//    console.log(elemento.value)
//}

//function load(){
//alert("Página carregada")
//}



/*function clicou(){
    document.getElementById("agradecimento").innerHTML=("Obrigado por clicar");
}

function redirecionar(){
    //window.open("https://www.w3schools.com/html/html_elements.asp");            WINDOW.OPEN ABRE EM OUTRA GUIA (EU PREFIRO ESSA)   
   // window.location.href = "https://www.w3schools.com/html/html_elements.asp";  WINDOW.HREF ABRE NA MESMA ABA QUE VOCÊ ESTÁ
    } 
    
function trocar(elemento) {
    elemento.innerHTML=("Obrigado por passar o mouse")         //     QUANDO A GENTE USA ESSA FUNÇÃO A GENTE NEM PRECISA DEFINIR UM ID NO INDEX!!!! PODE REMOVER!!!
    //document.getElementById("mousemove").innerHTML=("Obrigado por passar o mouse");
   // alert("trocar texto")
}

function voltar(elemento) {
elemento.innerHTML=("Passe o mouse aqui")    //     QUANDO A GENTE USA ESSA FUNÇÃO A GENTE NEM PRECISA DEFINIR UM ID NO INDEX!!!! PODE REMOVER!!!
   // document.getElementById("mousemove").innerHTML=("Passe o mouse aqui");
  
}
// EM TEORIA PARA COLOCAR UM NOVO ELEMENTO (MOUSEMOVE2) TERIAMOS QUE COLOCAR TUUUUDO DE NOVO
//MAS ISSO NÃO SERPA NECESSÁRIO QUANDO USAMOS O ELEMENTO (THIS) PODEMOS USAR VÁRIOS ELEMENTOS
// AO DEFINIR UM ELEMENTO A GENTE MUDA O document.getElementById("mousemove").innerHTML=("Passe o mouse aqui");
//POR element.innerHTML=("Escreve a frase que agente quer") e assim todos irão mudar!!!!!!!
//function trocar() {
//    document.getElementById("mousemove2").innerHTML=("Obrigado por passar o mouse");
//}
//
//function voltar() {
//    document.getElementById("mousemove2").innerHTML=("Passe o mouse aqui");  
//}

 //   alert("Obrigado por clicar!") Agora em vez do alert vamos usar um id. Colocamos um h3 no index e um id nele, agpra vamos puxar esse
 //                                 id para cá, através do dodument.getElementById e aqui podemos usar alguma funçõe
 //                                 como por exemplo, o InnnerHTML em que vamos injetar um html ali dentro, no caso, vamos
 //                                 injetar um texto.
*\

//var validar  = 0                                 AQUI EU TENHO QUE DECLARAR A VARIÁVEL (ELE MOSTROU A DIFERENCIAL DO USO LOCAL E GLOBAL)
//function validaIdade(idade){
//   validar;                               SE EU NÃO TENHO O VAR AQUI, VOU CHAMAR A FUNÇÃO FORA DO CONOLOE.LOG
//   if (idade >=18){
//       validar = true
//    } else {
//    validar = false
//    }
//    return validar; 
//    }
//    
//    var idade = prompt ("Qual sua idade?");
//    validaIdade(idade)                                 AQUI CHAMEI A FUNÇÃO FORA DO CONSOLE.LOG
//    console.log (validar)                         E MANDEI IMPRIMIR O VALIDAR


//QUANDO EU TIRO O VAR DA FUNÇÃO EU ESTOU FALANDO PARA ELE UTILIZAR O VAR GLOBAL!!! OU SEJA ELE VAI ME RETORNAR
//TRUE OU FALSE, SE EU COLOCO O VAR DENTRO DA FUNÇÃO EU ESTOU FALANDO PARA ELE USAR LOCALMENTE, OU SEJA, ELE VAI USAR
// O VALOR QUE EU DECLARAR NA MINHA VAR, NESSE CASO COMO EU DECLAREI VAR VALIDAR = 0 O  RESULTADO SEMPRE SERÁ IGUAL A ZERO
//E ESSA É A DIFERENÇA DO USO GLOBAL E LOCAL!!!!!




//function validaIdade(idade){
//    var validar;
//    if (idade >=18){
//      validar = true
//    } else {
//    validar = false
//    }
//    return validar; 
//    }
//    
//    var idade = prompt ("Qual sua idade?");
//    console.log (validaIdade(idade))




//Funções - Vamos agora juntar comandos em funções, por exemplo, somar, subtrair, validar, replace....
//function  soma(n1,n2){
//    return n1 +n2;
//}
//alert (soma(5,10));




//Datas - O mês ele sempre começa a contar do zero, então temos que somar +1
//var d = new Date();
//alert(d.getMonth()+1)
//alert(d.getMinutes) alguns outros exemplos
//alert(d.getDay) alguns outros exemplos
//Como trabalhar com datas, por exemplo como trabalhar com data atual:
//var d = new Date();
//alert(d)




//Outro laço de repetição é o for
//var count;
//for(count=0; count<=5; count++){   *ATENÇÃO a divisão aqui deve ser fetia com ponto e virgula ;
//    alert (count);
//};




//Laços de reptição:
//var count = 0
//while (count <= 5){
//    console.log(count);
//    count++
    //count = count + 1; esse e o count++ é a mesma coisa
//};



//var idade = prompt ("Qual sua idade?");   Com o o prompt você consegue coletar informações
//var idade = 18 primeiro fizemos um alert com essa var fixa, depois usamos o prompt para perguntar ao usuário
//if (idade >= 18) {
//alert ("maior de idade")
//}else alert ("menor de idade")


//Aqui vamos ver o dicionário, ele é similar o objeto Json. Nós vamos trabalhar com uma lista de dicionários.
//var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
//console.log (frutas[1].cor)
//alert (frutas[1].nome)

//var fruta = {nome: "maçã", cor: "vermelha"};
//console.log (fruta); vai mostrar o nome, a cor e os itens em cada
//console.log (fruta.nome);  vai mostrar o nome da fruta que é maçã
//alert (fruta.cor); vai mostrar a cor que é vermelha

//Possibilidades com Array
//var lista=["maçã","pêra","laranja"];
//console.log(lista.join(" - ")) Aqui se você quiser que fiquem separadas por outra coisa que não seja a virgula, você usa o .join e seleciona o item.
//console.log(lista); mostra a lista no console
//Aqui se você coloca [0] ele vai mostra só a primeira letra ----- console.log(lista.toString()[0])
//Diferente de quando usamo na lista que mostra o primeiro item ------ console.log(lista[0])
//console.log(lista.toString())aqui ele já vai trazer 
//lista.pop();  remove o último item
//lista.push("uva"); push coloca um item
//console.log(lista.reverse()); reverte a posição dos itens na lista, não esquecer de colocar ()
//console.log(lista.length); mostra o tamanho da lista

//Aqui vimos as possibilidades com strings
//var nome = "Raissa Reis";
//var idade = 27; o var aqui poderia se var idade = n1 e var idade2 = n2 para trabalharmos com número tb.
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//(alert(nome + "tem" + idade + "anos"));
//alert(idade + idade2);
//console.log (nome);
//console.log (idade + idade2);*
//console.log(frase.toLowerCase()); para deixar tudo minúsculo, não esqueça do () depois do comando toLowerCase
//console.log(frase.toUpperCase); para deixar tudo maiúsculo, não esqueça do () depois do comando toUpperCase
//console.log(frase.replace("Japão","Brasil")); para trocar uma palavra pela outra na frase
//alert(frase.replace("Japão","Brasil")); para trocar a palavra no alerta
