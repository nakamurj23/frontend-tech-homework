const email = document.getElementById("inputEmail");
const name = document.getElementById("inputName");
const textArea = document.getElementById("textArea");
const regStatus = document.getElementById("registrationStatus");
const modal = document.getElementById("formModal");
const modalBody = modal.querySelector(".modal-body");

// show modal on submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop default form submission

  // create array of checked boxes
  const checkedBoxes = document.querySelectorAll(".form-check-input:checked");
  // store values in courses
  const courses = Array.from(checkedBoxes).map((box) => box.value);
  // create final message
  const message =
    `Name: ${name.value}\n` +
    `Email: ${email.value}\n` +
    `Registration Status: ${regStatus.value}\n` +
    `Courses: ${courses.length > 0 ? courses.join(", ") : "None"}\n` +
    `Additional Concerns: ${textArea.value}`;
  modalBody.textContent = message;
  // show modal
  bootstrap.Modal.getOrCreateInstance(modal).show();
});
