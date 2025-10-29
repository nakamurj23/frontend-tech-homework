const input = document.getElementById("userInput");
const contentElement = document.getElementById("content");
const original = contentElement.innerHTML;

input.addEventListener("keyup", handleKeyUp);

// function to build safer query
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function handleKeyUp() {
  // pre-process query
  const query = input.value.trim().replace(/\s+/g, " ");
  if (query.length < 2) {
    // invalid query keeps content the same
    contentElement.innerHTML = original;
    return;
  }

  const safeQuery = escapeRegex(query);

  // creates "non-alphanumeric" boundaries
  const re = new RegExp(`(^|[^A-Za-z0-9])(${safeQuery})($|[^A-Za-z0-9])`, "gi");

  // return highlighted version of content
  const highlighted = original.replace(
    re,
    (full, left, word, right) => `${left}<mark>${word}</mark>${right}`
  );

  contentElement.innerHTML = highlighted;
}
