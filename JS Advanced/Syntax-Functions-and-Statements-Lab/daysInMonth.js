function daysInMonth(month, year) {

    const date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(0);

    console.log(date.getDate());
}

daysInMonth(2, 2021)