class ArrayUtilities {
    static addZeros = numbers => {
        return numbers.map(number => parseInt(number + "0"));
    };

    static moreThanFifty = numbers => {
        return numbers.filter(number => number > 50);
    };

    static removeFirst = numbers => {
        const [, ...result] = numbers;
        return result;
    };

    static sumAll = numbers => numbers.reduce((a, b) => a + b, 0);

    static divide = numbers => {
        return [...numbers.toString()];
    };
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
