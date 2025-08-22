let LOCAL_BASE = "http://localhost:3000";

function fetchProducts(url, cb) {
    fetch(`${LOCAL_BASE}/${url}`)
        .then((res) => res.json())
        .then((data) => cb(data))
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("FETCH COMPLETED!");
        })
}

let FetchHTMLData = document.querySelector('.products');

const renderProductsHTML = (products) => {
    products.forEach((product) => {
        if (product.category === "best") {
            FetchHTMLData = document.querySelector('.products-bs');
        }
        else if (product.category === "new") {
            FetchHTMLData = document.querySelector('.products');
        }
        const html = `<div class="product">
                            <div class="product-preview">
                                <div class="prod-img">
                                    <img src="${product?.photo ?? ""}" alt="">
                                </div>

                                <div class="hover-act">
                                    <div class="act-line-1">
                                        <p id="label">${product?.category ?? ""}</p>
                                        <div class="like"><i class="ri-heart-line"></i></div>
                                        <!-- work it on js (fill heart) -->
                                    </div>
                                    <div class="act-line-2">
                                        <button class="button black-button">Add to cart</button>
                                    </div>
                                </div>
                            </div>

                            <div class="stars"> <!--  work it on js (api) -->
                                <i class="ri-star-line"></i>
                                <i class="ri-star-line"></i>
                                <i class="ri-star-line"></i>
                                <i class="ri-star-line"></i>
                                <i class="ri-star-line"></i>
                            </div>
                            <div class="name">
                                <h3>${product?.title ?? ""}</h3>
                            </div>
                            <div class="price">
                                <p>$${product?.price ?? ""}</p>
                            </div>
                        </div>`
        FetchHTMLData.innerHTML += html;
    });
};

fetchProducts("products", (data) => {
    renderProductsHTML(data);
    console.log(data);
})