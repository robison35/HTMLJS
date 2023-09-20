const form = document.getElementById('form-confirm');
let ValA = parseFloat(document.getElementById('valor-a').value);
let ValB = parseFloat(document.getElementById('valor-b').value);

formValid = false;

function numbervalid (ValB, ValA    ){
    return ValB > ValB;
}

form.addEventListener('submit', function(e){
    e.preventDefault(); //previne carregamento da página após "submit"
    const messagesucess = 'formulario enviado com sucesso! Verificando: <b> ValorA menor que ValorB!</B>';
    formValid = numbervalid();
    if (formValid){
        const containermessagesucess = document.querySelector('.success-message');
        containermessagesucess.innerHTML = messagesucess;
        containermessagesucess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'nenhum';

        ValA.value = ' ';
        ValB.value = ' ';
    } else {
        document.querySelector('.error-message').style.display = 'block';
    }    
})