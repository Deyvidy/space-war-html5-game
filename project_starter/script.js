//Quando carregar a página, pege o Canvas e o Contexto 2D
window.onload = function(){
    
}

//Configurar aqui os levels
startGame = function () {
 
};

//Quando o loading acabar
function gameready() {
    
}


//configura os elementos no level 1
function setLevel1() {

}

//configura os elementos do menu
function setMenu() {

}


//GameLoop
loopgame = function (ctx) {
    
};



//Request Animate
window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();