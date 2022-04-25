const walletAmt = document.getElementById("wallet");
walletAmt.innerText = JSON.parse(localStorage.getItem("amount")) || 0;
// Implement debouncing for network request
// 14d6b288
const searchMovies = async () => {
    const q = document.getElementById("search").value;
      try{
           const res = await fetch(`https://www.omdbapi.com/?apikey=14d6b288&s=${q}&page=1`);
           const data = await res.json();
           if(data.Response == "True")
           appendData(data.Search);
      }
      catch(err){
          console.log(err);
      }
}
 

const appendData = (data) => {
    const box = document.getElementById("movies");
    box.innerHTML = null;
    data.forEach((ele) => {
       let box1 = document.createElement("div");
       let img1 = document.createElement("img");
       img1.src = ele.Poster;
       let title = document.createElement("h3");
       title.innerText = ele.Title;
       let book = document.createElement("button");
       book.innerText = "Book now";
       book.setAttribute("class","book_now");
       book.addEventListener("click",()=>{
          localStorage.setItem("movie",JSON.stringify(ele));
          window.location.href = "checkout.html";
       });
       box1.append(img1,title,book);
       box.append(box1);
    });
}

// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;
const debounce = (func,delay) => {
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(()=>{
       func();
    },delay);
}