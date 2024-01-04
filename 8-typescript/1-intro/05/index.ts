const numbers: number[] = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const filterEven = (array: number[]): number[] => {
    const evenNumbers = array.filter(currentNumber => currentNumber % 2 === 0);

    return evenNumbers;
}

console.log(filterEven(numbers));