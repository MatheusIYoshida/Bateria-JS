/*Queremos que faca um som quando clicar em uma tecla, para isso colocamos o .body, 
porque não estamos selecionando um local específico, mas sim a tela toda */
document.body.addEventListener('keyup', (event)=> {
    playSound(event.code.toLowerCase()); //recebe a tecla que foi pressionada e coloca no parametro da funcão
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value; //pega o que foi digitado no input

    if(song != ''){
        let songArray = song.split(''); //transforma a string em um array
        playComposition(songArray);
    }
})

function playSound(sound) { 
    let audioElement = document.querySelector(`#s_${sound}`); //busca o audio no html com o id s_(tecla pressionada), se n tiver som nessa tecla n ira tocar
    let keyElement = document.querySelector(`button[data-key="${sound}"]`); 

    if(audioElement) {
        audioElement.currentTime = 0; //reseta o audio caso clique rapidamente na mesma tecla
        audioElement.play(); // faz o audio tocar caso tenha som.
    }

    if(keyElement) {
        keyElement.classList.add('active'); //adiciona a classe active ao div que foi pressionado
    
        setTimeout(() => {
            keyElement.classList.remove('active'); //remove a classe active ao div que foi pressionado
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);
        
        wait += 250;
    }
}