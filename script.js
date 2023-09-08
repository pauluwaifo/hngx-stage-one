function updateTime() {
    const currentDate = new Date();
    const hours = String(currentDate.getUTCHours()).padStart(2, '0');
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');
    const timeString = `Current UTC Time: ${hours}:${minutes}:${seconds} UTC`;
    const timeElement = document.getElementById('time');
    timeElement.textContent = timeString;

}

function Day() {
    const currentDate = new Date();
    const currentDayNumber = currentDate.getUTCDay(); // Use getUTCDay() to get UTC day
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[currentDayNumber]
    const dayElement = document.getElementById('day');
    dayElement.textContent = `Current Day: ${currentDay}`;
}

updateTime()
Day()
setInterval(updateTime, 1000)