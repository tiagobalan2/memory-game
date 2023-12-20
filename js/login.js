const input = document.querySelector(".login-input"); //pego a classe login-input e atribuo a variavel input
const button = document.querySelector(".login-button"); //pego a classe login-button e atribuo a variavel button

const form = document.querySelector(".login-form"); //pego a classe .login-form e atribuo a variavel form

const validadeInput = ({target}) => { //foi colocado o target ali pois do evento vai ser tirado o target //estamos extraindo o target do objeto
    //sempre que clicar no input vai ser executado essa função
    //aqui vai ser validado se o input tem mais de tres caracteres
    // console.log(event.target.value); // - aqui vai retornar no console o que esta sendo digitado no input

    if (target.value.length > 2) { //se o value do target do objeto input tiver um tamanhho maior que 2, vai ser o atributo disabled do botao
        //habilitar botao
        button.removeAttribute('disabled'); //remover atributo disable do html
    } else {
        button.setAttribute('disabled', '') //setAttribute recebe dois parametros - o primeiro é o atributo e o segundo é o valor do atributo no caso disabled nao precisa de valor entao passamos vazio
         //aqui esta definindo o atributo disabled para o botao e esse atributo é vazio
         //o botao é desabilitado de ser clicado
    }
}

const handleSubmit = (event) => {
    //comportamento padrao de um form é enviar os dados e recarregar a página
    //precisamos bloquear esse evento padrao de envio de forumlario
    event.preventDefault(); //bloqueia o comportamento padrao de envio de formulario

    //precisamos salvar o que a pessoa digitou
    //vamos salvar no local storage do brownser
    localStorage.setItem('player', input.value); //esse metodo espera dois parametros
    //primeiro parametro - chave do valor
    //segundo parametro - valor da chave

    window.location = 'pages/game.html'; //redirecionamento da pessoa após mandar o nome

}

input.addEventListener('input', validadeInput);
form.addEventListener('submit', handleSubmit);












