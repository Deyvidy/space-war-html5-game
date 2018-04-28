function GameObject(sprite, x, y, classename, h, w) {
    this.sprite = null;
    this.x = 0;
    if(x !=undefined)
        this.x = x;
    this.y = 0;

    if(y !=undefined)
        this.y = y;

    this.classename = classename;

    this.w = 0;
    this.h = 0;
    this.z = 0;
    this.r = 0;

    if(sprite != undefined) {
        this.sprite = loader.getAssets(sprite);
        this.currentsprite = 0;
        this.h = this.sprite.height;
        this.w = this.sprite.width;
    }

}

GameObject.prototype.update = function() {}

GameObject.prototype.print = function(ctx) {
    ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h);

}
