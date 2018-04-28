function Laser(sprite, x, y, classename, h, w) {
    GameObject.call(this, sprite,x,y, classename, h,w);
    this.vel = 0;
}

//Herança
Laser.prototype = Object.create(GameObject.prototype);


Laser.prototype.update = function () {

    //se passar sair da tela, remova
    if((this.y < 0) || (this.y > canvas.height))
        jogo.objects.splice(jogo.objects.indexOf(this), 1);

    //movimento vertical
    this.y+=this.vel;

    //verifica colisao
    for(var i =0; i < jogo.objects.length; i++){
        ret2 = jogo.objects[i];
        if((ret2.classename == "background") || (ret2.classename == "laser") ) {
            continue;
        }

        if( (this.x + this.w) > ret2.x &&
            this.x < (ret2.x + ret2.w) &&
            (this.y + this.h) > ret2.y &&
            this.y < (ret2.y + ret2.w)){

            //se colidir com inimigo
            if(ret2.classename == "enemy")
                mlevel.killEnemy(ret2);

            //se colidir com o player
            else if(ret2.classename = "player") {
                mlevel.gameOver();
            }
        }

    }
}