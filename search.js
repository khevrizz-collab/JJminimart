
    const searchBar = document.getElementById("searchBar");

    searchBar.addEventListener("keyup", function () {
        let filter = searchBar.value.toLowerCase();
        let products = document.querySelectorAll(".product");

        products.forEach(product => {
            let name = product.querySelector("h2").textContent.toLowerCase();

            if (name.includes(filter)) {
                product.classList.remove("hide");
            } else {
                product.classList.add("hide");
            }
        });
    });

