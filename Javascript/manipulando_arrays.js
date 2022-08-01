// Manipulando Arrays

let techs = ['html', 'css', 'js'];

// Adicionar um item no fim
techs.push('nodejs');
console.log(techs);

// Adicionar elemento no começo do array
techs.unshift('sql');
console.log(techs);

// Remover do fim
techs.pop();
console.log(techs);

// Remover do começo
techs.shift();
console.log(techs);

// Pegar somente alguns elementos do array
console.log(techs.slice(1,3));

// Remover 1 ou mais itens em qualquer posição do array
console.log(techs.splice(0,2));

// Encontrar a posição de um elemento no array
techs.push('html', 'css');
console.log(techs);
console.log(techs.indexOf('html'));