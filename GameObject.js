function GameObject() {
    this.sprite = null;
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.y = 0;
    this.z = 0;
}

GameObject.prototype.sprite;
GameObject.prototype.x;
GameObject.prototype.y;
GameObject.prototype.w;
GameObject.prototype.y;
GameObject.prototype.z;

GameObject.prototype.update = function() {
    console.log("update");
}
GameObject.prototype.print = function() {
    console.log("print");
}