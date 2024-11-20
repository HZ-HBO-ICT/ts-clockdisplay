import ClockDisplay from './ClockDisplay.js';

let myDisplay: ClockDisplay;

window.addEventListener('load', () => {
  // Create a new ClockDisplay, and pass the DIV element through
  myDisplay = new ClockDisplay(document.getElementById('time') as HTMLDivElement);

  // Add the click listener for set Time
  document.getElementById('setTime')?.addEventListener('click', () => {
    const hours: number = getValueFromInput('hours');
    const minutes: number = getValueFromInput('minutes');
    const seconds: number = getValueFromInput('seconds');

    myDisplay.setTime(hours, minutes, seconds);
  });

  // Tick the time
  document.getElementById('tick')?.addEventListener('click', () => {
    myDisplay.timeTick();
  });
});

/**
 *
 * @param inputId Id of HTML Input element
 * @returns number value of the input element
 */
function getValueFromInput(inputId: string): number {
  const input: HTMLInputElement = document.getElementById(inputId) as HTMLInputElement;
  return Number.parseInt(input.value);
}
