var partidas = 100;
var vitorias = 98;
var derrotas = 2;

var total = vitorias - derrotas;

if(total <= 10){
     mmr = "Ferro";
}else if(total > 10 && total <= 20){
     mmr = "Bronze";
}else if(total > 21 && total <= 50){
     mmr = "Prata";
}else if(total > 51 && total <= 80){
     mmr = "Ouro";
}else if(total > 81 && total <= 90){
     mmr = "Diamante";
}else if(total > 91 && total <= 100){
     mmr = "Lendario";
}else{
     mmr ="Imortal";
}

function saida (){
    return console.log("O Herói tem de saldo de " +vitorias +" está no nível de "+mmr);
}
saida();