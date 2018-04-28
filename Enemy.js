function Enemy(sprite, x, y, classename,  h, w) {
    GameObject.call(this, sprite,x,y, classename, h,w);
    this.aceleration = 3;
    this.velmax = 5;
    this.timechange =  0;
    this.direction = "DIREITA";
    this.lastfire = 0;
}

//fazendo herança
Enemy.prototype = Object.create(GameObject.prototype);


Enemy.prototype.update = function () {
    //incrementa o contadores
    this.lastfire++;
    this.timechange ++;

    //contador para atirar
    if(this.lastfire > 100 + Math.random()*50) {
        this.lastfire = 0;
        laser = new Laser("lase2", 0, 0, "laser");
        laser.x = this.x;
        laser.y = this.y + this.h + 10;
        laser.vel = 4;
        jogo.objects.push(laser);
    }

    //contador para mudanca de direcao
    if(this.timechange > 100) {
        this.timechange = 0;
        if (Math.random()*100 < 50) {
          this.direction = "DIREITA"
        } else {
            this.direction ="ESQUERDA"
        }
    }


    //movimento vertical
    this.y += this.aceleration/10;

    //movimento horizontal
    if(this.direction == "DIREITA"){
        if(this.x < 0) {
            this.direction = "ESQUERDA";
            this.timechange = 0;
        }
        this.x -= this.aceleration;

    }else if(this.direction == "ESQUERDA"){
        if(this.x+this.w > canvas.width) {
            this.direction = "DIREITA";
            this.timechange = 0;
        }
        this.x += this.aceleration;
    }


    //se sair na parte inferior, retornar ao topo
    if(this.y-this.h > canvas.height)
        this.y = -this.h;




};