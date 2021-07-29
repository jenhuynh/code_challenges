// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.

function minsElapsedFromMidnight (){
    //initialize variable with new Date()
    let midnight = new Date();

 //The setHours() method sets the hours for a specified date according to local time, and returns the number of milliseconds since January 1, 1970 00:00:00 UTC until the time represented by the updated Date instance.

//setHours(hoursValue, minutesValue, secondsValue, msValue)
    midnight.setHours(24, 0, 0, 0);
//which means you do not have to individually set for each of these
    // midnight.setMinutes(0);
    // midnight.setSeconds(0);
    // midnight.setMilliseconds(0);
    return (midnight.getTime() - new Date().getTime()) / 1000 / 60;
}
//print in console the minutes elapsed from midnight
console.log(minsElapsedFromMidnight());
 