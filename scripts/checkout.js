const walletAmt = document.getElementById("wallet");
walletAmt.innerText = JSON.parse(localStorage.getItem("amount")) || 0;
// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

const booking = ()=>{
    const numSeat = document.getElementById("number_of_seats").value;
    let total = Number(numSeat)*100;
    if(total <= Number(walletAmt.innerText))
    {
        let amt = Number(walletAmt.innerText) - total;
        localStorage.setItem("amount",JSON.stringify(amt));
        alert("Booking successfull!");
        window.location.reload();
    }
    else{
        alert("Insufficient Balance!");
    }
}

const movie = JSON.parse(localStorage.getItem("movie"));

const box = document.getElementById("movie");
    box.innerHTML = null;
       let box1 = document.createElement("div");
       let img1 = document.createElement("img");
       img1.src = movie.Poster;
       let title = document.createElement("h3");
       title.innerText = movie.Title;
    
       box1.append(title,img1);
       box.append(box1);