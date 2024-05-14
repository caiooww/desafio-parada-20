var div = document.getElementById("resp")

function calculaMedia(){
    let nota_1 = parseFloat(document.getElementById("nota1").value);
    let nota_2 = parseFloat(document.getElementById("nota2").value);
    let nota_3 = parseFloat(document.getElementById("nota3").value);
    let mediaNotas = (nota_1 + nota_2 + nota_3) / 3
    let text = "";

        if(mediaNotas >= 6 && mediaNotas <= 10){
            text = `Você foi aprovado, parabéns!!: ${mediaNotas.toFixed(2)}`
        } else{
            text = `Você foi não foi aprovado pois a sua média é: ${mediaNotas.toFixed(2)}`
        }


    div.innerHTML = text;
}