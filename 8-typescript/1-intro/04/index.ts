const cities: string[] = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const validateLength = (array: string[]): string[] => {
    const cities = array.filter(city => city.length < 9);

    return cities;
}

console.log(validateLength(cities));