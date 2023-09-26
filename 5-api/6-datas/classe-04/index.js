import { isWeekend } from 'date-fns';

const openTime = new Date(2023, 0, 1, 8);
const closeTime = new Date(2023, 0, 1, 18);

const isOpen = (date) => {
    if (+date < +openTime && +date > +closeTime) {
        return false;
    } 
      
    if (isWeekend(date)) {
        return false;
    } 

    return true; 
}

console.log(isOpen(new Date(2023, 0, 1, 2)))