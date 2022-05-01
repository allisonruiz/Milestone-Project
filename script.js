var character = document.getElementById("character");
var game = document.getElementById("game");
var interval;
var both= 0;

function moveLeft() {
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    character.style.left = left - 2 + "px";
}

function moveRight() {
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    character.style.left = left + 2 + "px";
}

document.addEventListener("keydown", event => {
    if(both==0) {
        both++;
        if (event.key=="ArrowLeft") {
            interval = setInterval(moveLeft, 1);
        }
        if(event.key==="ArrowRight"){
            interval = setInterval(moveRight, 1);
        }
    }
})

document.addEventListener("keyup", event => {
    clearInterval(interval);
    both=0;
});

// setInterval(function(){
//     var blockLast = document.getElementById("block"+(counter-1));
//     var block2Last = document.getElementById("block2"+(counter-1));
//     if(counter>0){
//         var blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
//         var block2LastTop = parseInt(window.getComputedStyle(block2Last).getPropertyValue("top"));
//     }
//     if(block2LastTop<200){
        
//     }
// })
    var block2 = document.createElement("div");
    block2.setAttribute("class", "block2");
    block2.setAttribute("id", "block2");
    game.appendChild(block2);

