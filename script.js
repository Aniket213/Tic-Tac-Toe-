const main = document.querySelector("main");
const circle = document.querySelector(".circle");
const wrong = document.querySelector(".wrong");

const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const e = document.querySelector(".e");
const f = document.querySelector(".f");
const g = document.querySelector(".g");
const h = document.querySelector(".h");
const i = document.querySelector(".i");

let user;
let m;
wrong.addEventListener("click", ()=>{
    user = false;
    m = true;
})
circle.addEventListener("click", ()=>{
    user = true;
    m = false;
})


main.addEventListener("click", (e)=>{
    if(user){
        e.target.style.color = "black";
        e.target.textContent = 'O';
    }else{
        e.target.style.color = "black";
        e.target.textContent = 'X';
    }
    //
    const position = fun();
    console.log(position);
    if(m){
        position.textContent = 'O';        // here position is not considering as class name it is a string instead of a object
        position.style.color = "black";
    }else{
        position.textContent = 'X';
        position.style.color = "black";
    }

})

const str = "abcdefghi";

function fun(){
    const num = str[Math.floor(Math.random()*str.length)];
    if(num.textContent === 'X' || num.textContent === 'O'){   //here num is not working as class 
        fun();
    }
    console.log("num - " + num);
    return num;
}







































// ________________________________reset____________________________________
// const reset = document.querySelector(".reset");

// reset.addEventListener("click", ()=>{
//     for(let i =0;i<box.length ;i++){
//         box[i].textContent = "a";
//         box[i].style.color = "white";
//     }
// })





//const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//  ];





