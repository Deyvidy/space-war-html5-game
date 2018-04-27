function Levels(objs) {

    if(objs != undefined);
        objects = objs;

}

Levels.prototype.objects = [];


Levels.prototype.print = function () {
    for(var i=0; i< this.objects.length; i++) {
        this.objects[i].update();
        this.objects[i].print();
    }
}

