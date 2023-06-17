//! JAVASCRIPT

//? https://api.github.com/users/durmusfurkanozkan/followers?per_page=100

//? followers,durmusfurkanozkan,users endpoint
//? https://api.github.com base url
//? soru işaretinden sonraki kısımlar parametredir. 
//? & parametre ayracıdır.

const searchInput = document.getElementById("searchText")
const searchBtn = document.querySelector("#button");
const cardsDiv = document.querySelector(".cards");


console.log(searchInput);
console.log(searchBtn);
console.log(cardsDiv);

searchBtn.addEventListener("click", () =>{
    
    if(searchInput.value){
         getData(searchInput.value)
    }else{
        alert("Please enter an user name")
    }
    

})

 const getData = async (username) =>{
    console.log(username);
    const url = `https://api.github.com/users/${username}/followers?per_page=100`;

    try {
        let response = await fetch(url);

        if(response.ok){
            const data = await response.json();
            console.log(data);
            data.forEach(element => {
                createElem(element);
            });
        }else{
            cardsDiv.innerHTML=`<h1 class="text-danger">User can not be found</h1> `;
        }

        console.log(response)


    } catch (error) {
        console.log(error)
    }
}

const getData2 = async () =>{

}

const createElem = (element)=>{
    console.log(element)
    const {login,avatar_url,html_url} = element;

    const newElem = `
    <div class="col">
        <div class="card">
        <img src="${avatar_url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${login}</h5>
            <a href="${html_url}" target="_blank" class="btn btn-dark">View Profile</a>
        </div>
        </div>
    </div>
    `;
    cardsDiv.innerHTML += newElem;
}