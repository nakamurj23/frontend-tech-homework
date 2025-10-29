const resultsDiv = document.getElementById("resultsDiv");
const userInput = document.getElementById("userInput");
const searchBtn = document.getElementById("searchBtn");

function renderResults(list, query) {
  // Clear old results
  resultsDiv.innerHTML = "";

  // do nothing if query is invalid
  if (!query || query.length < 3) {
    return;
  }

  // return error message if no matches
  if (list.length === 0) {
    resultsDiv.innerHTML = '<p class="text-danger m-0">No results found.</p>';
    return;
  }

  // highlight each char in list
  list.forEach((char) => {
    const highlightedName = char.name.replace(
      new RegExp(query, "gi"),
      (match) => `<mark>${match}</mark>`
    );

    // create and append card
    const card = document.createElement("div");
    card.className =
      "card d-flex align-items-center justify-content-center text-center";
    card.style.width = "12rem";
    card.style.height = "8rem";
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title mb-2">${highlightedName}</h5>
        <p class="card-text mb-0">Birth year: ${char.birth_year}</p>
      </div>
    `;
    resultsDiv.appendChild(card);
  });
}

function handleSearch() {
  // pre-process search query
  const query = userInput.value.trim().replace(/\s+/g, " ").toLowerCase();

  // return filtered list
  const filtered = characters.filter((c) =>
    c.name.toLowerCase().includes(query)
  );

  renderResults(filtered, query);
}

// search on keydown event
searchBtn.addEventListener("click", handleSearch);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSearch();
  }
});
