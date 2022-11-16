import ClockDisplay from './ClockDisplay.js';

let myDisplay: ClockDisplay;

window.addEventListener('load', () => {
  // Create a new ClockDisplay, and pass the DIV element through
  myDisplay = new ClockDisplay(document.getElementById('time') as HTMLDivElement);

  // Add the click listener for set Time
  document.getElementById('setTime').addEventListener('click', () => {
    const hoursInput: HTMLInputElement = document.getElementById('hours') as HTMLInputElement
    const hours: number = Number.parseInt(hoursInput.value, 10);
    const minutesInput: HTMLInputElement = document.getElementById('minutes') as HTMLInputElement
    const minutes: number = Number.parseInt(minutesInput.value, 10);
    const secondsInput: HTMLInputElement = document.getElementById('seconds') as HTMLInputElement
    const seconds: number = Number.parseInt(secondsInput.value, 10);

    myDisplay.setTime(hours, minutes, seconds);
  });

  // Tick the time
  document.getElementById('tick').addEventListener('click', () => {
    myDisplay.timeTick();
  });
});
