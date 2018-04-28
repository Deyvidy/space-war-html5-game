function ManagerLevel() {
    
}

//Gerenciando o Level
ManagerLevel.prototype.nextLevel =function () {
    
}

ManagerLevel.prototype.priorLevel =function () {
    
}

//limpa a tela e chama a impressao do level atual
ManagerLevel.prototype.print = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.levels[this.currentLevel].print(ctx);
}

//cria novo inimigo
ManagerLevel.prototype.createNewEnemy = function (acel) {
 
}

//mata inimigo
ManagerLevel.prototype.killEnemy = function (object) {
   
}
//add score 
ManagerLevel.prototype.addScore = function(){
     
}

//seta o game over
ManagerLevel.prototype.gameOver = function () {
    
}