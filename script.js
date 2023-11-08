const rootElement = document.querySelector("#root");
console.log(rootElement);

const fetchUrl = async (url) => fetch(url).then((res) => res.json());

const characterComponent = (characterData) => `
    <div class='char'>
    <img src=${characterData.image}>
    <h2>${characterData.name}</h2>
    <h3>${characterData.episode.length} episodes </h3>
    </div>
`;

const init = () => {
  fetchUrl("https://rickandmortyapi.com/api/character").then((data) => {
    console.log(data);

    const info = data.info;  // info object
    const characters = data.results; // characters array 

    characters.forEach((character) => {
      rootElement.insertAdjacentHTML(
        "beforeend",
        characterComponent(character)
      );
    });
  });
};
init();
