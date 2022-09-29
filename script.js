var existe = 0;
var listaFilmes = [
  "https://br.web.img3.acsta.net/medias/nmedia/18/95/59/60/20417256.jpg",
  "https://br.web.img2.acsta.net/pictures/19/07/10/20/01/2331295.jpg",
  "https://br.web.img3.acsta.net/pictures/20/11/04/11/32/4052345.jpg",
  "https://musicnonstop.uol.com.br/wp-content/uploads/2021/08/PT-BR_LCDP_S5_Main_Vertical_RGB_PRE.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg",
  "https://poltronanerd.com.br/wp-content/uploads/2019/01/poltrona-Sex-education-poster.jpg",
  "https://pbs.twimg.com/media/FKgWtEFWUAQO63c.jpg",
  "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.getElementById("lista1").innerHTML +=
    "<img src='" + listaFilmes[i] + "'>";
}

//Adicionando nos itens

function Adicionar() {
  var urlfilme = document.getElementById("url").value;

  verificar(urlfilme);

  if (existe == 0) {
    //filme não existe
    if (urlfilme == "") {
      //verifica se está com o link
      alert("Coloque o link da imagem");
    } else {
      listaFilmes.push(urlfilme);
      document.getElementById("lista1").innerHTML +=
        "<img src='" + listaFilmes[listaFilmes.length - 1] + "'>";
    }
  } else {
    // filme existe
    alert("Selecione outro filme");
    existe = 0;
  }
  document.getElementById("url").value = ""; //limpa campo do link
}

function verificar(filme) {
  for (var i = 0; i < listaFilmes.length; i++) {
    if (listaFilmes[i] == filme) {
      alert("O filme já foi adicionado!");
      existe = 1;
      console.log(existe);
    }
  }
}