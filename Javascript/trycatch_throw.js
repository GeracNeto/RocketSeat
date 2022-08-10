// Throw dispara um "erro" e interrompe a aplicação caso não exitsa um try catch
// O try catch tenta executar algo (try) e caso de erro ele captura esse erro (catch)

function showName(name = ''){

    if(name === ''){
        throw 'Nome é obrigatório';
    }
    else{
        return console.log(name);
    }
}

// showName()

try {
    showName();    
} catch (e) {
    console.log(e);    
}