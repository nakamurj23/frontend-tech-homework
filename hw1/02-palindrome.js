const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

function handleInput() {
  console.log(elem.toString().length);
  if (elem.toString().length == 1) {
    console.log("palindrome");
  }
}
