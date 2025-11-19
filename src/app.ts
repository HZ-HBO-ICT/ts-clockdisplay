window.addEventListener('load', () => {
  // Create a new ClockDisplay, and pass the DIV element through

  // Add the click listener for set Time
  document.getElementById('setTime')?.addEventListener('click', () => {
    const hours: number = getValueFromInput('hours');
    const minutes: number = getValueFromInput('minutes');
    const seconds: number = getValueFromInput('seconds');

    alert(`${hours}:${minutes}:${seconds}`);
  });

  // Tick the time
  document.getElementById('tick')?.addEventListener('click', () => {
    alert('Tick');
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
