const input = document.getElementById("userInput");
const contentElement = document.getElementById("content");
const original = contentElement.innerHTML;

input.addEventListener("keyup", handleKeyUp);

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function handleKeyUp() {
  const query = input.value.trim().replace(/\s+/g, " ");
  if (query.length < 2) {
    contentElement.innerHTML = original;
    return;
  }

  const safeQuery = escapeRegex(query);

  // If you want to match next to digits like "11the", use letters-only boundaries:
  // const re = new RegExp(`(^|[^A-Za-z])(${safeQuery})($|[^A-Za-z])`, "gi");

  // If you want classic "non-alphanumeric" boundaries (won't match 11the):
  const re = new RegExp(`(^|[^A-Za-z0-9])(${safeQuery})($|[^A-Za-z0-9])`, "gi");

  const highlighted = original.replace(
    re,
    (full, left, word, right /*, offset, inputStr */) =>
      `${left}<mark>${word}</mark>${right}`
  );

  contentElement.innerHTML = highlighted;
}
