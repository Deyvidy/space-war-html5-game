function Levels(objects) {
    this.objects = [];

    if(objects != undefined)
        this.objects = objects;

}

//imprime na tela todos os objetos do level
Levels.prototype.print = function (ctx) {
    for(var i=0; i< this.objects.length; i++) {
        //chama update de cada objeto
        this.objects[i].update();

        //objetos pode ser removidos no update
        if(this.objects[i] == undefined)
            continue;

        this.objects[i].print(ctx);
    }
}

