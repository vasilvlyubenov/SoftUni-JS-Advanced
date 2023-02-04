function timeToWalk(steps, footInMeters, speedKmInHour) {
    let distanceMeters = steps * footInMeters;
    let speedMetersSec = speedKmInHour / 3.6;
    let time = distanceMeters / speedMetersSec;
    let rest = Math.floor(distanceMeters / 500);

    let timeMin = Math.floor(time / 60);
    let minutes = timeMin + rest;
    let seconds = Math.round(time - (timeMin * 60));
    let hour = Math.floor(time / 3600);


    console.log(`${hour < 10 ? `0${hour}` : `${hour}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`);

}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);