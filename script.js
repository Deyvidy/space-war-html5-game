//Quando carregar a página, pege o Canvas e o Contexto 2D
window.onload = function(){
    canvas = document.getElementById("gamecanvas");
    ctx = canvas.getContext("2d");

    //iniciando o jogo
    startGame();
}

//Configurar aqui os levels
startGame = function () {

    mlevel = new ManagerLevel();
    loader = new Loader(gameready);
    teclado = new ManagerInputs();
    storage = new ManagerStorage();

    //Add lista resource
    loader.addResource("background", "Backgrounds/purple.png");
    loader.addResource("shipblue", "playerShip2_blue.png");
    loader.addResource("enemyred", "enemyRed1.png");
    loader.addResource("lase1", "laserBlue01.png");
    loader.addResource("lase2", "laserRed01.png");
    loader.addResource("logogame", "logogame.png");
    loader.addResource("play", "labelPlay.png");
    loader.addResource("labelrank", "labelRanking.png");
    loader.addResource("guiscore", "playerLife2_blue.png");

    loader.loading();

    storage.setScore();
};

//Quando o loading acabar
function gameready() {
    //Level 1 (jogo)
    jogo= new Levels();
    //Leve 2 (Menu)
    menu = new Levels();

    setMenu();

    mlevel.currentLevel = 0;
    loopgame(ctx);
}


//GameLoop
loopgame = function (ctx) {
    //chama o print do manager level
    mlevel.print(ctx);
    //requestframe
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

function setLevel1() {
    bg = new GameObject("background",0,0,"background");
    bg.print = function (ctx) {
        var ptrn = ctx.createPattern(this.sprite, 'repeat');
        ctx.fillStyle = ptrn;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    jogo.objects.push(bg);
    jogo.objects.push(new Player("shipblue", 300, 600,"player"));
    jogo.objects.push( new Enemy("enemyred", 250, 0, "enemy"));
    jogo.objects.push(new Enemy("enemyred", 500, 0, "enemy"));
    jogo.objects.push(new GameObject("guiscore", 600,0, "guiscore"));
    scoretext = new GameObject("");
    scoretext.print =function () {
        ctx.fillStyle = "#FFF";
        ctx.font = "15px Arial";
        ctx.fillText(mlevel.score, 650, 20);
    };
    jogo.objects.push(scoretext);


    mlevel.levels.push(jogo);
}


function setMenu() {
    //*** MENU ***/
    bg = new GameObject("background",0,0,"background");
    bg.print = function (ctx) {
        var ptrn = ctx.createPattern(this.sprite, 'repeat');
        ctx.fillStyle = ptrn;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }


    logo = new GameObject("logogame");
    logo.x = canvas.width/2 - logo.w/2;
    logo.y = 20;

    play = new GameObject("play");
    play.x = canvas.width/2 - play.w/2;
    play.y = 350;
    play.update = function () {
        if(teclado.ESPACO){
            mlevel.nameplayer = document.getElementById("nameplayer").value;
            mlevel.nextLevel();
        }
    }

    ranking = new GameObject("labelrank");
    ranking.x = canvas.width/2 - ranking.w/2;
    ranking.y = 530;



    scores = storage.getScore();
    topscore = new GameObject("");
    topscore.print = function () {
        ctx.fillStyle = "#FFF";
        ctx.font = "20px Arial";
        for(var i=0; i<3; i++) {
            str = "0"+(i+1)+" - Player: " + scores[i].name + " - Score: " + scores[i].score;
            ctx.fillText(str, 220, 600+i*25);
        }
    }

    menu.objects.push(bg);
    menu.objects.push(logo);
    menu.objects.push(play);
    menu.objects.push(ranking);
    menu.objects.push(topscore);

    mlevel.levels.push(menu);

}