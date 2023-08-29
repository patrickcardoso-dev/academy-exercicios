const openTime = new Date(2023, 0, 1, 8);
const closeTime = new Date(2023, 0, 1, 18);

const isOpen = (date) => {
    if (+date >= +openTime && +date <= +closeTime) {
        return true;
    } 
        
    return false; 
}

console.log(isOpen(new Date(2023, 0, 1, 8)))