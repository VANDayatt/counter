document.addEventListener("DOMContentLoaded", () => {
  // Initialize counters for each counter container
  document.querySelectorAll(".container").forEach((container) => {
    let valueElement = container.querySelector(".value");
    let counterValue = 0;

    // Update the displayed counter value
    function updateValue() {
      valueElement.textContent = counterValue;
    }

    // Event listeners for each button
    container.querySelector(".increase").addEventListener("click", () => {
      counterValue++;
      updateValue();
    });

    container.querySelector(".decrease").addEventListener("click", () => {
      if (counterValue > 0) {
        counterValue--;
        updateValue();
      }
    });

    container.querySelector(".reset").addEventListener("click", () => {
      counterValue = 0;
      updateValue();
    });

    // Initialize display with default value
    updateValue();
  });
});
