import { isWeekend, isSaturday } from 'date-fns';

const openTime = new Date(2023, 0, 1, 8);
const closeTime = new Date(2023, 0, 1, 18);
const saturdayCloseTime = new Date(2023, 0, 1, 12);

const isOpen = (date) => {
    if (+date < +openTime && +date > +closeTime) {
        return false;
    } 
    
    if (isSaturday(date) && +date > +saturdayCloseTime) {
        return false;
    }

    if (isWeekend(date)) {
        return false;
    } 

    return true; 
}