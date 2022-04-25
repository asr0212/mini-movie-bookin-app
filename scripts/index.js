// Store the wallet amount to your local storage with key "amount"
const walletAmt = document.getElementById("wallet");
walletAmt.innerText = JSON.parse(localStorage.getItem("amount")) || 0;

const addAmount = () => {
    const amt = document.getElementById("amount").value;
    let sum = Number(walletAmt.innerText) + Number(amt);
    localStorage.setItem("amount",JSON.stringify(sum));
    window.location.reload();
}

const goMovies = () => {
    window.location.href = "movies.html";
}

