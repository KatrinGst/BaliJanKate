// get the start and end dates
const startDate = new Date(2023, 0, 1); // January 1, 2023
const endDate = new Date(2023, 3, 29); // April 29, 2023

// get the boat and icon elements
const boat = document.getElementById('boat');
const startIcon = document.getElementById('start-icon');
const endIcon = document.getElementById('end-icon');

// calculate the distance between start and end dates in milliseconds
const totalDistance = endDate.getTime() - startDate.getTime();

// get the current date and calculate the distance from start to current date
const currentDate = new Date();
const currentDistance = currentDate.getTime() - startDate.getTime();

// calculate the percentage of the distance travelled
const progress = currentDistance / totalDistance;

// calculate the position of the boat based on the progress
const boatPosition = progress * 100;

// set the position of the boat
boat.style.left = boatPosition + '%';

// set the position of the start and end icons
startIcon.style.left = '0%';
endIcon.style.left = '100%';

// create the line elements
const lineContainer = document.getElementById('line-container');
const lineStep = 100 / 4; // four steps, one for each month
for (let i = 0; i <= 4; i++) {
  const line = document.createElement('div');
  line.classList.add('line');
  line.style.left = i * lineStep + '%';
  lineContainer.appendChild(line);
}
