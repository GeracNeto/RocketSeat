let system = {
    receitas: [100, 300, 1800],
    despesas: [600, 200, 500, 100]
};

const calculate = (data) => {

    let receitas = data.receitas;
    let despesas = data.despesas;

    console.log(receitas)

    let sumReceitas = 0;
    let sumDespesas = 0;

    sumReceitas = receitas.reduce((prev, current) => prev += current);
    sumDespesas = despesas.reduce((prev, current) => prev += current);

    if(sumReceitas > sumDespesas){
        console.log(`Saldo positivo de: R$ ${sumReceitas - sumDespesas}`);
    }
    else if(sumReceitas < sumDespesas){
        console.log(`Saldo negativo de: R$ ${sumDespesas - sumReceitas}`)
    }
    else{
        console.log(`Saldo zero R$ ${sumReceitas - sumDespesas}`)
    }
};

calculate(system);