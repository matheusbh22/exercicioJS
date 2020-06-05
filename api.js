// exercícios 3 à 6//

function carregarImagem(){
    let teste = document.getElementById("teste");
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(
        response => response.json()
    )
    .then(
        data => {
            console.log(data);
        }
    )
    .then(
        data =>{
            teste.innerHTML = teste.innerHTML + "<img src= cachorro.jpg alt=cachorro></img>"
        }
    )

    .then(
        data => {
            console.log ("<img src = cachorro.jpg alt = Cachorro />")
        }
    )


    .catch(error => console.error(error));
}
