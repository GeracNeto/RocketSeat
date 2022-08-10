let person = {
    name: 'Geraldo',
    age: 23,
    weight: 68.0
}

for(let property in person){
    console.log(property);
    console.log(person[property])
}