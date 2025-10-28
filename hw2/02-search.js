const resultsDiv = document.getElementById("resultsDiv");
const userInput = document.getElementById("userInput");
const searchBtn = document.getElementById("searchBtn");

function renderResults(list, query) {
  // Clear old results
  resultsDiv.innerHTML = "";

  if (!query || query.length < 3) {
    return;
  }

  if (list.length === 0) {
    resultsDiv.innerHTML = '<p class="text-danger m-0">No results found.</p>';
    return;
  }

  list.forEach((char) => {
    const highlightedName = char.name.replace(
      new RegExp(query, "gi"),
      (match) => `<mark>${match}</mark>`
    );

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
  const query = userInput.value.trim().replace(/\s+/g, " ").toLowerCase();

  const filtered = characters.filter((c) =>
    c.name.toLowerCase().includes(query)
  );

  renderResults(filtered, query);
}

searchBtn.addEventListener("click", handleSearch);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSearch();
  }
});
