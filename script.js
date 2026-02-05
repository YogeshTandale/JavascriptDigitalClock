function updateClock() {
    const now = new Date();

    // Get hours, minutes, seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 → 12

    // Add leading zero if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display time
    document.getElementById('time').innerText = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Display date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').innerText = now.toLocaleDateString(undefined, options);
}

// Update every second
setInterval(updateClock, 1000);

// Call immediately so it shows without delay
updateClock();
