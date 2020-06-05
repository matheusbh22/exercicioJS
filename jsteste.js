//exercícios 1 à 2//

var receita = {
    titulo: "Chocolate",
    porcoes: "2",
    ingredientes:  [
        "cacau",
        "leite",
        "manteiga",
    ]
}
console.log(receita.titulo);
console.log(receita.porcoes);
console.log(receita.ingredientes[0]);
console.log(receita.ingredientes[1]);
console.log(receita.ingredientes[2]);

let livros = [
    {
        titulo: "livro1",
        autor: "autor1",
        livrolido: true,
    },

    {
        titulo: "livro2",
        autor: "autor2",
        livrolido: false,
    },
    
    {
        titulo: "livro3",
        autor: "autor3",
        livrolido: true,
    },
    
    {
        titulo: "livro4",
        autor: "autor4",
        livrolido: false,
    },
]

for (i=0;i<livros.length;i++){
    console.log(livros[i].titulo);
    console.log(livros[i].autor);
    if(livros[i].livrolido == true){
        console.log ("Você já leu esse livro: " + livros[i].titulo);
    }else{
        console.log ("Você não leu esse livro: " +"Título: " + livros[i].titulo + "Autor: " + livros[i].autor);
    }
}
