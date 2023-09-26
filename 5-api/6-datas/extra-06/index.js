import { addHours } from 'date-fns';

const startPromotion = new Date(2023, 0, 1);
const endPromotion = addHours(startPromotion, 24);

const isValid = (date) => {
    if (+date < +startPromotion && +date > +endPromotion) {
        return false;
    }

    return true;
}

console.log(isValid(new Date(2023, 0, 1, 8)))