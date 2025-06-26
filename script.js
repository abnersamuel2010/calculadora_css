function soma(){

    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);

    let soma = numero_um + numero_dois;

    document.getElementById('resultado').textContent = 'Resultado: '+ soma;

    
}
function subtrair(){

    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);

    let subtrair = numero_um - numero_dois;

    document.getElementById('resultado').textContent = 'Resultado: '+ subtrair;


}
function multiplicação(){

    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);

    let multiplicação = numero_um * numero_dois;

    document.getElementById('resultado').textContent = 'Resultado: '+ multiplicação;




}
function divisão(){    

    let numero_um = parseFloat(document.getElementById('primeiro_numero').value);
    let numero_dois = parseFloat(document.getElementById('segundo_numero').value);

    if( numero_dois == 0 ){

      alert( "Não é possivel dividir!!" );
      return;
    }

    let divisão = numero_um / numero_dois;

    document.getElementById('resultado').textContent = 'Resultado: '+ divisão;

}

function comparação(){
    let numero_um = parseFloat(document.getElementById('primeiro_numero').value);
    let numero_dois = parseFloat(document.getElementById('segundo_numero').value);
    if(numero_um > numero_dois ){
        document.getElementById('resultado').textContent = "O maior é " + numero_um;
        return;
    }else if(numero_um < numero_dois){
        document.getElementById('resultado').textContent = "O maior é " + numero_dois;
        return;
    }else{
        document.getElementById('resultado').textContent = "São iguais ";
    }
}
