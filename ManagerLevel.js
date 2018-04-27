function ManagerLevel() {
    this.currentLevel =0;
    this.levels = [];
}

ManagerLevel.prototype.levels = null;
ManagerLevel.prototype.currentLevel = null;


//Gerenciando o Level
ManagerLevel.prototype.nextLevel =function () {
    this.currentLevel++;
}

ManagerLevel.prototype.priorLevel =function () {
    this.currentLevel--;
}

ManagerLevel.prototype.print = function () {
    this.levels[this.currentLevel].print();
}