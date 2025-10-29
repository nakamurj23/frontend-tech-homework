window.addEventListener("load", () => {
  const startBtn = document.getElementById("startBtn");
  const input = document.getElementById("intervalInput");
  const body = document.body;
  const container = document.getElementById("container");
  const errorMessage = document.createElement("p");
  let isRunning = false;
  let intervalID = null;

  startBtn.addEventListener("click", handleClick);

  // function to generate random color and set background
  function changeColor() {
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    body.style.backgroundColor = `rgba(${r},${g},${b},0.5)`;
  }

  // function to handle click event
  function handleClick() {
    // set error message text and color
    errorMessage.textContent = "Value must be greater than or equal to one.";
    errorMessage.style.color = "red";
    let errorState = false; // initialize error state

    // allows stop if input is empty and background change is active
    if (input.value >= 1 || isRunning) {
      if (errorState) {
        // if error state is active but program is able to run remove error
        container.removeChild(errorMessage);
        errorState = false;
      }
      if (!isRunning) {
        // if not already running execute interval change
        isRunning = true;
        startBtn.textContent = "Stop";
        // toggle button text and appearance
        startBtn.classList.remove("btn-primary");
        startBtn.classList.add("btn-danger");
        intervalID = setInterval(changeColor, input.value * 1000); // save ID to clear later
      } else {
        // if running toggle button and clear interval
        isRunning = false;
        startBtn.textContent = "Start";
        startBtn.classList.remove("btn-danger");
        startBtn.classList.add("btn-primary");
        clearInterval(intervalID);
        intervalID = null;
      }
    } else {
      // if input is invalid display error message
      container.appendChild(errorMessage);
      errorState = true;
    }
  }
});
