function Loader(callback) {
    //list of assets
    this.folder = "resources/";
    this.assetsList = [];
    this.assetsListLoaded = [];
    this.checkAssetsList =0;
    this.callback = callback;
}

Loader.prototype.addResource = function (name, resource) {
    this.assetsList.push([name, resource]);
}

Loader.prototype.loading = function( ){

    //turn all assets
    for(var i = 0; i < this.assetsList.length; i++){

        //set new image in list of loaded assets
        this.assetsListLoaded.push(new Image());

        //set onload funtion
        this.assetsListLoaded[this.assetsListLoaded.length-1].onload = function(){
            //plus for check
            this.checkAssetsList++;

            //if check equal count assets then over load process
            if(this.checkAssetsList == this.assetsList.length ){

                this.callback();
            }else{
                //this.print();
            }
        }.bind(this);

        //call src of assets
        this.assetsListLoaded[this.assetsListLoaded.length-1].src = this.folder+this.assetsList[i][1];
    }
}

Loader.prototype.getAssets = function(name){

    for(var i=0; i< this.assetsList.length; i++){

        if(this.assetsList[i][0] == name)
            returning = this.assetsListLoaded[i];
    }

    return returning;

}
