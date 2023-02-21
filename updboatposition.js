const startDate = new Date('2023-01-01');
const endDate = new Date('2023-04-29');
const currentDate = new Date();
const totalTime = endDate - startDate;
const currentTime = currentDate - startDate;
const progress = (currentTime / totalTime) * 100;
const runnerPosition = progress + '%';
const runner = document.getElementById('runner');
const progressBar = document.getElementById('progress-bar');

runner.style.left = runnerPosition;
progressBar.style.width = progress + '%';


