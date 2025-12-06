
// SIMPLE SEARCH FEATURE
const form = document.querySelector(".search-bar");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();  // stop page refresh

    const input = form.querySelector("input").value;  // get text

    if (input === "fashion") {
      window.location.href = "fashion.html";
    }
    else if (input === "electronics") {
      window.location.href = "electronics.html";
    }
    else if (input === "decor") {
      window.location.href = "decor.html";
    }
    else if (input === "beauty") {
      window.location.href = "beauty.html";
    }
    else if (input === "books") {
      window.location.href = "books.html";
    }
    else if (input === "sports") {
      window.location.href = "sports.html";
    }
    else {
      alert("Category not found");
    }
  });
}





// PRODUCT 1
let p1minus = document.querySelector("#p1-minus");
let p1plus = document.querySelector("#p1-plus");
let p1qty = document.querySelector("#p1-qty");
let p1total = document.querySelector("#p1-total");

// PRODUCT 2
let p2minus = document.querySelector("#p2-minus");
let p2plus = document.querySelector("#p2-plus");
let p2qty = document.querySelector("#p2-qty");
let p2total = document.querySelector("#p2-total");

// MAIN TOTALS
let subtotal = document.querySelector("#subtotal");
let finalTotal = document.querySelector("#final-total");

// product prices
let price1 = 799;
let price2 = 1999;


function updateTotals() {
    let product1Total = parseInt(p1qty.value) * price1;
    let product2Total = parseInt(p2qty.value) * price2;

    let sub = product1Total + product2Total;
    subtotal.innerText = "₹" + sub;

    finalTotal.innerText = "₹" + (sub + 99);
}

p1minus.addEventListener("click", function () {
    if (p1qty.value > 1) {
        p1qty.value--;
        p1total.innerText = "₹" + (p1qty.value * price1);
        updateTotals();
    }
});

p1plus.addEventListener("click", function () {
    p1qty.value++;
    p1total.innerText = "₹" + (p1qty.value * price1);
    updateTotals();
});

p2minus.addEventListener("click", function () {
    if (p2qty.value > 1) {
        p2qty.value--;
        p2total.innerText = "₹" + (p2qty.value * price2);
        updateTotals();
    }
});

p2plus.addEventListener("click", function () {
    p2qty.value++;
    p2total.innerText = "₹" + (p2qty.value * price2);
    updateTotals();
});








document.addEventListener("DOMContentLoaded", function() {
    let subsBtn = document.querySelector("#subs-btn");
    let btnState = "off";

    if (subsBtn) {
        subsBtn.addEventListener("click", function () {
            if (btnState === "off") {
                btnState = "on";
                subsBtn.innerText = "Subscribed";
            } else {
                btnState = "off";
                subsBtn.innerText = "Subscribe";
            }
        });
    }
});





