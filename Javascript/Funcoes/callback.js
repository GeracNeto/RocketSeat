// Callback function

function sayMyName(funcao){
    console.log('Entrei na função sayMyName');

    funcao(); // Executa a função callback
}

sayMyName(() => console.log('Sou a função callback'));