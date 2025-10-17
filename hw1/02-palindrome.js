const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

function handleInput() {
  const input = elem.value;
  const array = input.toString().split("");
  const output = document.getElementById("output");

  // check that input is non-empty
  if (array.length > 0) {
    // declare boolean
    let isPalindrome = true;
    // loop through array checking each side
    for (let i = 0; i < array.length / 2; i++) {
      // if mismatch set boolean to false and break
      if (array[i] != array[array.length - 1 - i]) {
        isPalindrome = false;
        break;
      }
    }
    // check boolean
    if (isPalindrome) {
      output.innerHTML = "Yes. this is a palindrome!";
      output.style.color = "green";
    } else {
      output.innerHTML = "No. this is not a palindrome!";
      output.style.color = "red";
    }
  } else {
    // if length is zero display nothing
    output.innerHTML = "";
  }
}
