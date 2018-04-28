function Player(sprite, x, y,classename,  h, w) {
    GameObject.call(this, sprite, x,y,classename, h,w);
    
}

//fazendo herança
Player.prototype = Object.create(GameObject.prototype);


Player.prototype.update = function () {
 
};

//criar laser para atacar o inimigo
Player.prototype.createFire = function () {
 
}

//movimento cima
Player.prototype.moveUp = function () {
 
}
//movimento baixo
Player.prototype.moveDown = function () {
    
}
//movimento esquerda
Player.prototype.moveLeft = function () {
    
}
//movimento direita
Player.prototype.moveRight = function () {
    
}
