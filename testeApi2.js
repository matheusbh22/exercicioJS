function tabela(){
    
    let tabela = document.getElementById("tabela")

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(
        Response => Response.json()
    )
    .then(
        data=>{
            data.forEach( pessoa =>{
                    let linha = tabela.insertRow(-1);
                    let id = linha.insertCell(0);
                    let name = linha.insertCell(1);
                    let email = linha.insertCell(2);
                    let city = linha.insertCell(3);
                    id.innerHTML = pessoa.id;
                    name.innerHTML = pessoa.name; 
                    email.innerHTML = pessoa.email; 
                    city.innerHTML = pessoa.address.city;
                  }

             )
            
        }
    )
 }