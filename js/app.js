// alert(1);
// 表示が確認できたらコメントアウト

// 以下にデータの塊（オブジェクト）を書きましょう🤗
const data = {
  hito: "もりた",
  age: "34",
  name: "もりた",
};
// console.log(data, "データの塊");
// console.log(data.hito); //もりた
// console.log(data.age); // 34
// console.log(data.name); //皆様の名前

// ここからポケモンAPIの実装になります🤗
const pokemonNum = 10;

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonNum; i++) {
    // console.log(i, "i");
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  console.log(pokemon, "データの塊");
  console.log(pokemon.name); //名前
  console.log(pokemon.height); //高さ
  createPokemon(pokemon);
};

function createPokemon(pokemon) {
  const poke = `
    <div>
      <h1>No: ${pokemon.id}</h1>
      <p>名前: ${pokemon.name}</p>
      <p>高さ: ${pokemon.height}</p>
      <img src="${pokemon.sprites.front_default}" />
    </div>
  `;

  $(".list").append(poke);
}

//
$("h1").on("click", function () {
  // $("h1").html("クリックされた!");
  // for (let i = 1; i <= 10; i++) {
  //   $("p").append(i + "回転");
  // }

  // 実行するぞという意味
  fetchPokemons();

  // この下は消さない
});
