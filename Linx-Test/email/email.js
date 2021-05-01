//Global flag to help to show products
var flag = 0

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

    const productShowing = data.products.length / 4

    for(i = flag; i < (flag + productShowing); i++)
    {
        let showProduct =
        `
        <div class="info-product">

                <div class="image-product">
                    <img src="${data.products[i].image}" alt="">
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
                    <p>ou ${data.products[i].installments.count}x de $${data.products[i].installments.value}</p>
                </div>

                <button class="buy-button">Comprar</button>
        </div>
        `

        document.getElementById('list-product').innerHTML += showProduct;
    }
    
    flag += productShowing;

    if(flag == data.products.length)
    {
        apiProducts_url = `https://${data.nextPage}`;
        flag = 0;
    }
}

//Calling function when pages load:
console.log(getApi(apiProducts_url));