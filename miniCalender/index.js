const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");
const timeEl = document.getElementById("time");

// Function to update the date and time
function updateDateTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const amPm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 || 12; // Converts 0 to 12 for midnight
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  monthNameEl.innerText = date.toDateString("en", { month: "long" });
  dayNameEl.innerText = date.toLocaleString("en", { weekday: "long" });
  dayNumEl.innerText = date.getDate();
  yearEl.innerText = date.getFullYear();

  // Format the time to HH:MM:SS AM/PM
  const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amPm}`;
  timeEl.innerText = formattedTime;
}

// Initial call to update the date and time immediately
updateDateTime();

// Update the time every second
setInterval(updateDateTime, 1000);
