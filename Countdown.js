// Set the date for the trip
const tripDate = new Date("2023-04-29T00:00:00Z");

// Function to update the countdown
function updateCountdown() {
  const now = new Date();
  const distance = tripDate - now;

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the countdown element
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Call the updateCountdown function every second
setInterval(updateCountdown, 1000);