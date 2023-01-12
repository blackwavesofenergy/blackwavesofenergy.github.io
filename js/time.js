var today = new Date();
var hourNow = today.getHours();
var timeOfDay;

if (hourNow > 18) {
    timeOfDay = "evening";
}
else if (hourNow > 12) {
    timeOfDay = "afternoon";
}
else if (hourNow > 0) {
    timeOfDay = "morning";
}
else {
    timeOfDay = "day";
}

document.write('<span>' + timeOfDay + ',</span>');