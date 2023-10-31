// Desafio do Herói

let heroiXp = 8347;
let heroiNome = "Rodonilson";

if (heroiXp < 1000) {
  console.log(
    "O Herói de nome " +
      heroiNome +
      " possui " +
      heroiXp +
      " pontos. Seu Elo é FERRO"
  );
} else if (heroiXp > 1000 && heroiXp < 2000) {
  console.log(
    "O Herói de nome " +
      heroiNome +
      " possui " +
      heroiXp +
      " pontos. Seu Elo é BRONZE"
  );
} else if (heroiXp > 2000 && heroiXp < 6000) {
  console.log(
    "O Herói de nome " +
      heroiNome +
      " possui " +
      heroiXp +
      " pontos. Seu Elo é PRATA"
  );
} else if (heroiXp > 6000 && heroiXp < 7000) {
  console.log(
    "O Herói de nome " +
      heroiNome +
      " possui " +
      heroiXp +
      " pontos. Seu Elo é OURO"
  );
} else if (heroiXp > 7000 && heroiXp < 8000) {
  console.log(
    "O Herói de nome " +
      heroiNome +
      " possui " +
      heroiXp +
      " pontos. Seu Elo é PLATINA"
  );
} else if (heroiXp > 8000 && heroiXp < 9000) {
  console.log(
    "O Herói de nome " +
      heroiNome +
      " possui " +
      heroiXp +
      " pontos. Seu Elo é ASCENDENTE"
  );
} else if (heroiXp > 9000 && heroiXp < 10000) {
  console.log(
    "O Herói de nome " +
      heroiNome +
      " possui " +
      heroiXp +
      " pontos. Seu Elo é IMORTAL"
  );
} else {
  console.log(
    "O Herói de nome " +
      heroiNome +
      " possui " +
      heroiXp +
      " pontos. Seu Elo é RADIANTE"
  );
}
