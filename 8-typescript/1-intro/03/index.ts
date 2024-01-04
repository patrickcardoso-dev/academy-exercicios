const numbers: number[] = [0, 122, 4, 6, 7, 8, 44];

const validateEvenArray = (array: number[]): string => {
    const isEven = array.every(current => current % 2 === 0);

    if (!isEven) {
        return `Array inválido`;
    }

    return `Array válido`;
}

console.log(validateEvenArray(numbers));
