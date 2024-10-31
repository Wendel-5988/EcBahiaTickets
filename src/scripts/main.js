
let formulario = document.querySelectorAll('.formulario');

formulario.forEach(elemento => {
    elemento.addEventListener('submit', (e) => {
        e.preventDefault();
        const pass = elemento.querySelector('.pass');
        const passConfirm = elemento.querySelector('.senhaConfirm');
        
        if (pass.value !== passConfirm.value) {
            alert("Senhas não coincidem");
        } else {
            alert("Formulario enviado");
            elemento.reset();
        }
    })
})

const tickets = document.querySelectorAll('.events__content__tickets');
const valor = "";

//diaDoJogo = tickets.map(elemento => console/log(elemento)//elemento.getAttribute('data-date')
    
    /*diasDejogo.forEach(elemento2 => {
        const diaDoJogo = elemento2.getTime();
        console.log(elemento);
    })*/
    
    //const timeStampeDiaDoJogo = diasDoJogo.getTime();
    //console.log(timeStampeDiaDoJogo);
//)

const divs = document.querySelectorAll('.events__content__tickets');

const contaTempo = setInterval(function(){
    const hoje = new Date();
    const timeStampeDeHoje = hoje.getTime();
    divs.forEach(dataDate => { 
        const timeString = dataDate.getAttribute('data-date');
        
        
        const span = dataDate.querySelector('.contagem');
        const button = dataDate.querySelector('.buy-button');
        const timeDate = new Date (timeString);

        const timeStampeDate = timeDate.getTime();

        const horasAteJogo = timeStampeDate - timeStampeDeHoje;

        const diasEmMs = 24 * 60 * 60 * 1000;
        const horasEmMs = 60 * 60 * 1000;
        const minutosEmMs = 60 * 1000;

        const dias = Math.floor(horasAteJogo / diasEmMs);
        const horas = Math.floor((horasAteJogo % diasEmMs) / horasEmMs);
        const minutos = Math.floor((horasAteJogo % horasEmMs ) / minutosEmMs);
        const segundos = Math.floor((horasAteJogo % minutosEmMs) / 1000);

        if(dias >= 0 && dias < 10) {
            span.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s para o inicio do jogo`;
            button.innerHTML = `Comprar`;
            console.log()
        } else if (dias >= 10) {
            span.innerHTML = `${dias - 10}d ${horas}h ${minutos}m ${segundos}s para pré-venda`;
            button.innerHTML = `Indisponivel`
            button.disabled = true;
            dataDate.classList.add('events--indisponivel')
        }else {
            span.innerHTML = `Esse evento está encerrado.`
            button.innerHTML = `Indisponivel`
            button.disabled = true;
            dataDate.classList.add('events--indisponivel')
        }
    })
}, 1000)

const dialog = document.querySelector('.dialog');

document.querySelectorAll('.buy-button').forEach(elemento => {
    elemento.addEventListener('click', () => {
        dialog.showModal();
    })
})

document.querySelectorAll('.close-dialog').forEach(elemento => {
    elemento.addEventListener('click', () => {
        dialog.close();
    })
})

const formDialog = document.querySelector('.dialog__content');

formDialog.addEventListener('submit', (e) => {
    e.preventDefault();
    formDialog.reset();
    alert('Entrou (laele)');
    dialog.close();
})