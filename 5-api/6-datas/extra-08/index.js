const format = require('date-fns/format')

const a = (date) => {
    const formatedDate = format(date, 'dd \'de\' MMMM \'de\' yyyy');
    return formatedDate;
}

const b = (date) => {
    const formatedDate = format(date, 'dd/MM/yyyy');
    return formatedDate;
}

const c = (date) => {
    const formatedDate = format(date, 'd MMM');
    return formatedDate;
}

const d = (date) => {
    const formatedDate = format(date, 'd MMM yyyy');
    return formatedDate;
}

const e = (date) => {
    const formatedDate = format(date, 'dd \'de\' MMM \'de\' yyyy');
    return formatedDate;
}

const f = (date) => {
    const formatedDate = format(date, 'dd/MMM');
    return formatedDate;
}

console.log(a(new Date(2020, 9, 20)))
console.log(b(new Date(2020, 9, 20)))
console.log(c(new Date(2020, 9, 20)))
console.log(d(new Date(2020, 9, 20)))
console.log(e(new Date(2020, 9, 20)))
console.log(f(new Date(2020, 9, 20)))