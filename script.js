function soma(){

    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);

    let soma = numero_um + numero_dois;

    document.getElementById('resultado').textContent = 'Resultado: '+ soma;

    
}