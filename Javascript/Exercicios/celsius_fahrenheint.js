

const tempConvert = (degree = '', type = '') => {

    type = type.toLocaleUpperCase();
    degree = parseFloat(degree);

    let result = 0;

    if (!degree) {
        throw new Error('Temperatura não identificada');
    }
    else if (!type) {
        throw new Error('Tipo não identificado');
    }

    switch (type) {
        case 'F':

            result = degree * (9 / 5) + 32;
            break;
        case 'C':

            result = (degree - 32) * (5 / 9);
        default:

            result
            break;
    }

    return result.toFixed(2).toString() + ' ' + type;
};

try {
    console.log(tempConvert('23', 'f'));
} catch (e) {
    console.log(e);
};


