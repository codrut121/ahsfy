// Aici va fi adăugat codul JavaScript pentru interactivitate
console.log("ahsfy - Scripturile au fost încărcate.");

document.addEventListener("DOMContentLoaded", function() {
    const addToCartButton = document.querySelector(".add-to-cart-btn");

    if (addToCartButton) {
        addToCartButton.addEventListener("click", () => {
            alert("Produsul a fost adăugat în coș!");
            // Aici ar trebui adăugată logica pentru a adăuga produsul în coș
        });
    }
});
