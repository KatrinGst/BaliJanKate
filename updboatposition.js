// Set the start and end dates
const startDate = new Date('2023-01-01');
const endDate = new Date('2023-04-29');

// Get the boat, start, end, and path elements
const boat = document.getElementById('boat');
const start = document.getElementById('start');
const end = document.getElementById('end');
const path = document.getElementById('path');

// Set the start and end positions
const startPercent = 0;
const endPercent = 100;

// Calculate the current position
const now = new Date();
const timeDiff = endDate.getTime() - startDate.getTime();
const timeElapsed = now.getTime() - startDate.getTime();
const percentElapsed = (timeElapsed / timeDiff) * 100;
const boatPosition = startPercent + ((endPercent - startPercent) * (percentElapsed / 100));

// Update the boat and path positions
boat.style.left = `${boatPosition}%`;
path.style.width = `${boatPosition - 10}%`;

// Set the start and end icons
start.style.left = '0';
end.style.right = '0';

