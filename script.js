//Quando carregar a página, pege o Canvas e o Contexto 2D
window.onload = function(){
    canvas = document.getElementById("gamecanvas");
    ctx = canvas.getContext("2d");
    //iniciando o jogo
    start();
}

//Configurar aqui os levels
start = function () {
    window.mlevel = new ManagerLevel();
    //Level 1
    l1= new Levels();
    //Objetos do level 1
    gameplay = new GameObject();
    l1.objects.push(gameplay);

    mlevel.levels.push(l1);
    loopgame(ctx);
}

//GameLoop
loopgame = function (ctx) {

    mlevel.print();
    requestAnimFrame(function() {
        loopgame(ctx);
    });
};


//Request Animate
window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();