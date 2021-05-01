//Starting API Url
var apiProducts_url = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";

//to get response from API
async function getApi(url){

    const response = await fetch(url);

    var data = await response.json();

    show(data);
}

//Showing products
function show(data){
    for(i = 0; i < data.products.length; i++)
    {
        let showProduct =
        `<div class="info-product">
            <div class="image-product">
                <img src="${data.products[i].image}" alt="" width="200px" height="150px">
            </div>
            <div class="name-product">
                <h4>${data.products[i].name}</h4>
            </div>
            <div class="description-product">
                <p>${data.products[i].description}</p>
            </div>
            <div class="old-price">
                <p>De: R$${data.products[i].oldPrice}</p>
            </div>
            <div class="new-price">
                <p>Por: R$${data.products[i].price}</p>
            </div>
            <div class="divided-price">
                <p>ou ${data.products[i].installments.count}x de ${data.products[i].installments.value}</p>
            </div>

            <button class="buy-button">Comprar</button>
        </div>`

        document.getElementById('list-product').innerHTML += showProduct;
    }

    apiProducts_url = `https://${data.nextPage}`;
}

//Calling function when pages load:
console.log(getApi(apiProducts_url));


/*Checking if the name has only white spaces, with email we don't need because submit would block if the value in
text box doesn't correspond to the type of the input.*/
function checkNameFriend(){

    const nameBox = document.getElementById('name-friend').value;

    if (!nameBox.replace(/\s/g, '').length) {
        alert("Insira um nome por gentileza");
        return false;
    }
}