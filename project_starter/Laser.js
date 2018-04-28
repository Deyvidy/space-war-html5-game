function Laser(sprite, x, y, classename, h, w) {
    GameObject.call(this, sprite,x,y, classename, h,w);
}

//Herança
Laser.prototype = Object.create(GameObject.prototype);


Laser.prototype.update = function () {

 
}