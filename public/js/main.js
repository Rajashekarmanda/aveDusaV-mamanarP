const mainEl = document.getElementById("mainId");

const buttonEl = document.createElement("button");
buttonEl.textContent = "Fetch Characters";
buttonEl.className = "btn"; // Add a class for styling
mainEl.appendChild(buttonEl);

buttonEl.addEventListener("click", async () => {
  const fetchedCharacters = await fetch("http://localhost:8080/characters");
  const characters = await fetchedCharacters.json();

  //   mainEl.innerHTML = `<h1>Characters</h1>`;
  characters.forEach((character) => {
    const paraEl = document.createElement("p");
    paraEl.textContent = `${character.id}) ${character.name} - ${character.description}`;
    mainEl.appendChild(paraEl);
  });

  // Disable the button after fetching
  buttonEl.disabled = true; // Disable the button after fetching
});
