 //    console.log(e.target);
const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const ee = document.querySelector(".e");    //
const f = document.querySelector(".f");
const g = document.querySelector(".g");
const h = document.querySelector(".h");
const i = document.querySelector(".i");
//
const line = document.querySelector(".line");     //horizontal line
const line2 = document.querySelector(".line2");   // vertical line
//
const section = document.querySelector("section");
const change = document.querySelector(".change");
const win = document.querySelector(".win");
const trn = document.querySelector(".turn");
const reset = document.querySelector(".btn");

let symbol = "X";


section.addEventListener("click", (e)=>{
    e.target.textContent = symbol;
    if(symbol == "X"){
        symbol = "O";
        change.textContent = "O";
    }
    else{
        symbol = "X";
        change.textContent = "X";
    }
    // for all X -------------------------------------------------------------------------------------------------------------------
    if(a.textContent == "X" && b.textContent == "X" && c.textContent == "X" ){         //r1
        line.style.display = "block";
        line.style.top = "14%";
        win.innerHTML = "X won the game";
        trn.style.display = "none";
    }

    if(d.textContent == "X" && ee.textContent == "X" && f.textContent == "X" ){        //r2
        line.style.display = "block";
        line.style.top = "48%";
        win.innerHTML = "X won the game";
        trn.style.display = "none";
    }

    if(g.textContent == "X" && h.textContent == "X" && i.textContent == "X" ){         //r3
        line.style.display = "block";
        line.style.top = "82%";
        win.innerHTML = "X won the game";
        trn.style.display = "none";
    }

    if(a.textContent == "X" && d.textContent == "X" && g.textContent == "X" ){         //c1
        line2.style.display = "block";
        line2.style.left = "16%";
        win.innerHTML = "X won the game";
        trn.style.display = "none";
    }

    if(b.textContent == "X" && ee.textContent == "X" && h.textContent == "X" ){        //c2
        line2.style.display = "block";
        line2.style.left = "50%";
        win.innerHTML = "X won the game";
        trn.style.display = "none";
    }

    if(c.textContent == "X" && f.textContent == "X" && i.textContent == "X" ){         //c3
        line2.style.display = "block";
        line2.style.left = "83%";
        win.innerHTML = "X won the game";
        trn.style.display = "none";
    }

    if(a.textContent == "X" && ee.textContent == "X" && i.textContent == "X" ){         //d1
        line2.style.display = "block";
        line2.style.left = "50%";
        line2.style.transform = "rotate(-45deg)";
        win.innerHTML = "X won the game";
        trn.style.display = "none";
    }

    if(c.textContent == "X" && ee.textContent == "X" && g.textContent == "X" ){         //d2
        line2.style.display = "block";
        line2.style.left = "50%";
        line2.style.transform = "rotate(45deg)";
        win.innerHTML = "X won the game";
        trn.style.display = "none";
    }
    // for all O --------------------------------------------------------------------------------------------------------------
    if(a.textContent == "O" && b.textContent == "O" && c.textContent == "O" ){         //r1
        line.style.display = "block";
        line.style.top = "14%";
        win.innerHTML = "O won the game";
        trn.style.display = "none";
    }

    if(d.textContent == "O" && ee.textContent == "O" && f.textContent == "O" ){        //r2
        line.style.display = "block";
        line.style.top = "48%";
        win.innerHTML = "O won the game";
        trn.style.display = "none";
    }

    if(g.textContent == "O" && h.textContent == "O" && i.textContent == "O" ){         //r3
        line.style.display = "block";
        line.style.top = "82%";
        win.innerHTML = "O won the game";
        trn.style.display = "none";
    }

    if(a.textContent == "O" && d.textContent == "O" && g.textContent == "O" ){         //c1
        line2.style.display = "block";
        line2.style.left = "16%";
        win.innerHTML = "O won the game";
        trn.style.display = "none";
    }

    if(b.textContent == "O" && ee.textContent == "O" && h.textContent == "O" ){        //c2
        line2.style.display = "block";
        line2.style.left = "50%";
        win.innerHTML = "O won the game";
        trn.style.display = "none";
    }

    if(c.textContent == "O" && f.textContent == "O" && i.textContent == "O" ){         //c3
        line2.style.display = "block";
        line2.style.left = "83%";
        win.innerHTML = "O won the game";
        trn.style.display = "none";
    }

    if(a.textContent == "O" && ee.textContent == "O" && i.textContent == "O" ){         //d1
        line2.style.display = "block";
        line2.style.left = "50%";
        line2.style.transform = "rotate(-45deg)";
        win.innerHTML = "O won the game";
        trn.style.display = "none";
    }

    if(c.textContent == "O" && ee.textContent == "O" && g.textContent == "O" ){         //d2
        line2.style.display = "block";
        line2.style.left = "50%";
        line2.style.transform = "rotate(45deg)";
        win.innerHTML = "O won the game";
        trn.style.display = "none";
    }
    
    if((a.textContent == "X" || a.textContent == "O") && (b.textContent == "X" || b.textContent == "O") && (c.textContent == "X" || c.textContent == "O") && (d.textContent == "X" || d.textContent == "O") && (ee.textContent == "X" || ee.textContent == "O") && (f.textContent == "X" || f.textContent == "O") && (g.textContent == "X" || g.textContent == "O") && (h.textContent == "X" || h.textContent == "O") && (i.textContent == "X" || i.textContent == "O")){
        win.innerHTML = "Draw";
        trn.style.display = "none";
    }

})



const clear = document.querySelectorAll(".clear");

reset.addEventListener("click", ()=>{
    for(let i = 0; i<clear.length; i++){
        clear[i].textContent = " ";
    }
    line.style.display = "none";
    line2.style.display = "none";
    win.innerHTML = "";
    trn.style.display = "block";
})























 