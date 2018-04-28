function ManagerLevel() {
    this.nameplayer = "";
    this.currentLevel =0;
    this.levels = [];
    this.score = 0;
}

//Gerenciando o Level
ManagerLevel.prototype.nextLevel =function () {
    this.currentLevel++;

    if(this.currentLevel != 0)
        document.getElementById("nameplayer").style.display = "none";
    else
        document.getElementById("nameplayer").style.display = "inline-block";

    if(this.currentLevel == 1){
        setLevel1();
    }
}

ManagerLevel.prototype.priorLevel =function () {
    this.currentLevel--;

    if(this.currentLevel != 0)
        document.getElementById("nameplayer").style.display = "none";
    else
        document.getElementById("nameplayer").style.display = "inline-block";


    if(this.currentLevel == 1){
        setLevel1();
    }
}

//limpa a tela e chama a impressao do level atual
ManagerLevel.prototype.print = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.levels[this.currentLevel].print(ctx);
}

//cria novo inimigo
ManagerLevel.prototype.createNewEnemy = function (acel) {

    enemy = new Enemy("enemyred", Math.random()*500, -50, "enemy");
    enemy.aceleration = acel + 0.2;
    this.levels[this.currentLevel].objects.push(enemy);
}

//mata inimigo
ManagerLevel.prototype.killEnemy = function (object) {
    this.addScore();
    this.levels[this.currentLevel].objects.splice(jogo.objects.indexOf(object), 1);
    this.createNewEnemy(object.aceleration);

}

ManagerLevel.prototype.addScore = function(){
    this.score++;
}

//seta o game over
ManagerLevel.prototype.gameOver = function () {
    this.levels[this.currentLevel].objects = [];
    this.priorLevel();
    storage.updateScore(this.score);
}