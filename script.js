function convertFromDecimal() {
    let decimal = document.getElementById('decimal').value;
    if (decimal) {
        decimal = parseInt(decimal, 10);
        document.getElementById('binary').value = decimal.toString(2);
        document.getElementById('octal').value = decimal.toString(8);
        document.getElementById('hexadecimal').value = decimal.toString(16).toUpperCase();
        document.getElementById('ternary').value = decimal.toString(3);
        document.getElementById('quintal').value = decimal.toString(5);
        document.getElementById('vigesimal').value = decimal.toString(20).toUpperCase();
        document.getElementById('bcd').value = convertToBCD(decimal);
    } else {
        clearFields();
    }
}

function convertFromBinary() {
    convertFromBase('binary', 2);
}

function convertFromOctal() {
    convertFromBase('octal', 8);
}

function convertFromHexadecimal() {
    convertFromBase('hexadecimal', 16);
}

function convertFromTernary() {
    convertFromBase('ternary', 3);
}

function convertFromQuintal() {
    convertFromBase('quintal', 5);
}

function convertFromVigesimal() {
    convertFromBase('vigesimal', 20);
}

function convertFromBCD() {
    let bcd = document.getElementById('bcd').value;
    if (bcd) {
        let decimal = parseInt(convertFromBCDString(bcd), 10);
        setValuesFromDecimal(decimal);
    } else {
        clearFields();
    }
}

function convertFromBase(id, base) {
    let value = document.getElementById(id).value;
    if (value) {
        let decimal = parseInt(value, base);
        setValuesFromDecimal(decimal);
    } else {
        clearFields();
    }
}

function setValuesFromDecimal(decimal) {
    document.getElementById('decimal').value = decimal.toString(10);
    document.getElementById('binary').value = decimal.toString(2);
    document.getElementById('octal').value = decimal.toString(8);
    document.getElementById('hexadecimal').value = decimal.toString(16).toUpperCase();
    document.getElementById('ternary').value = decimal.toString(3);
    document.getElementById('quintal').value = decimal.toString(5);
    document.getElementById('vigesimal').value = decimal.toString(20).toUpperCase();
    document.getElementById('bcd').value = convertToBCD(decimal);
}

function convertToBCD(decimal) {
    let bcd = "";
    for (let digit of decimal.toString()) {
        bcd += parseInt(digit).toString(2).padStart(4, '0') + " ";
    }
    return bcd.trim();
}

function convertFromBCDString(bcd) {
    return bcd.split(" ").map(bin => parseInt(bin, 2)).join("");
}

function clearFields() {
    let fields = ['decimal', 'binary', 'octal', 'hexadecimal', 'ternary', 'quintal', 'vigesimal', 'bcd'];
    fields.forEach(field => document.getElementById(field).value = '');
}
