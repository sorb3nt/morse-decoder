const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    let result = "";

    for (let i = 0; i < expr.length; i = i + 10) {
        let charNumbCode = expr.slice(i, i + 10);
        let charMorseCode = "";

        for (let j = 9; j >= 0; j = j - 2) {
            let charBit = charNumbCode[j - 1] + charNumbCode[j];

            if (charBit === "10")
                charMorseCode = "." + charMorseCode;
            if (charBit === "11")
                charMorseCode = "-" + charMorseCode;
            if (charBit === "00") break;
            if (charBit === "**")
                charMorseCode = "**" + charMorseCode;
        }

        result = result + MORSE_TABLE[charMorseCode];
    }

    return result;
}

module.exports = {
    decode
}