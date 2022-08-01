// Funções Construtoras

/* 
Funções construtoras são utilizadas para criar novos objetos 
e geralmente tem a sua primeira letra maiúscula, todos com as mesmas 
características que são criadas na função, usando a palavra reservada this 
para se referir ao objeto sendo criado, por exemplo:
*/

function Person(name){
    this.name = name;
    this.walk = function(){
        return console.log(this.name, 'is walking');
    }
}

const personOne = new Person('Geraldo'); // Instanciando Person

personOne.walk();