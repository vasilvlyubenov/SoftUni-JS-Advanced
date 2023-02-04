function dayOfWeek(day) {
    const weekDays = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    }

    if (weekDays.hasOwnProperty(day)) {
        console.log(weekDays[day]);
    } else {
        console.log('error');
    }
}

dayOfWeek('Invalid')