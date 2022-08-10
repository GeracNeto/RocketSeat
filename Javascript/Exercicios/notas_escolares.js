const getScore = (nota) => {

    let scoreF = nota > 0 && nota < 60;
    let scoreD = nota >= 60 && nota <= 69;
    let scoreC = nota >= 70 && nota <= 79;
    let scoreB = nota >= 80 && nota <= 89;
    let scoreA = nota >= 90 && nota <= 100;

    let scoreFinal;

    if (scoreA) {
        scoreFinal = 'A';
    }

    else if (scoreB) {
        scoreFinal = 'B';
    }

    else if (scoreC) {
        scoreFinal = 'C';
    }

    else if (scoreD) {
        scoreFinal = 'D';
    }

    else if (scoreF) {
        scoreFinal = 'F';
    }

    else {
        scoreFinal = 'Nota inválida';
    }

    return console.log(scoreFinal);
}

getScore(-1)
getScore(101)
getScore(100)
getScore(69)
getScore(75)
getScore(68)
getScore(-1)
getScore(54)
getScore(84)

