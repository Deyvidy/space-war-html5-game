function Player(sprite, x, y,classename,  h, w) {
    GameObject.call(this, sprite, x,y,classename, h,w);
    this.aceleration = 0;
    this.velmax = 5;
    this.gunready = true;
    this.islive = true;
}

//fazendo herança
Player.prototype = Object.create(GameObject.prototype);


Player.prototype.update = function () {

    //Comandos do Teclado

    //Fogo
    if(teclado.ESPACO){
       this.createFire();
    }else{
        this.gunready = true;
    }

    //movimento
    if(teclado.CIMA){
        this.moveUp();
    }

    if(teclado.BAIXO){
      this.moveDown();
    }

    if(teclado.DIREITA){
        this.moveRight()
    }

    if(teclado.ESQUERDA){
        this.moveLeft();
    }

    if ( (!teclado.ESQUERDA) && (!teclado.DIREITA) && (!teclado.CIMA)&& (!teclado.BAIXO) && (this.aceleration > 0))
        this.aceleration-=0.2;
};

Player.prototype.createFire = function () {

    if(this.gunready) {
        laser = new Laser("lase1",0,0,"laser");
        laser.x = this.x + this.w / 2 - laser.w / 2;
        laser.y = this.y - laser.h;
        laser.vel = -4;
        jogo.objects.push(laser);
        this.gunready = false;
    }
}

Player.prototype.moveUp = function () {

    if(this.aceleration < this.velmax)
        this.aceleration += 0.2;
    if(this.y > 0)
        this.y -=this.aceleration;

}

Player.prototype.moveDown = function () {
    if(this.aceleration < this.velmax)
        this.aceleration += 0.2;

    if(this.y < 600)
        this.y +=this.aceleration;
}

Player.prototype.moveLeft = function () {
    if(this.aceleration < this.velmax)
        this.aceleration += 0.2;

    if(this.x > 0)
        this.x-=this.aceleration;
}

Player.prototype.moveRight = function () {
    if(this.aceleration < this.velmax)
        this.aceleration += 0.2;

    if(this.x < canvas.height  - this.w)
        this.x+=this.aceleration;
}
