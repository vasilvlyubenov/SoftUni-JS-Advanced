function previousDay(year, month, day) {
    const date = new Date(year, month - 1, day - 1);
    const newYear = date.getFullYear();
    const newMonth = date.getMonth() + 1;
    const newDate = date.getDate();

console.log(`${newYear}-${newMonth}-${newDate}`);

}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);