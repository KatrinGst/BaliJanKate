const boatContainer = document.querySelector('.boat-container');

function updateBoatPosition() {
  const currentDate = new Date();
  const travelDate = new Date('April 29, 2023');
  const timeRemaining = travelDate.getTime() - currentDate.getTime();
  const totalTime = travelDate.getTime() - new Date('January 1, 2023').getTime();
  const percentageComplete = 1 - (timeRemaining / totalTime);
  const minBottom = -150; // minimum bottom position for boat
  const maxBottom = 0; // maximum bottom position for boat
  const bottomPosition = (maxBottom - minBottom) * percentageComplete + minBottom;
  boatContainer.style.bottom = `${bottomPosition}px`;
}

// Call the updateBoatPosition function every second
setInterval(updateBoatPosition, 1000);
