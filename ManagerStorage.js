ManagerStorage = function () {
    this.setScore();
}

ManagerStorage.prototype.setScore = function(){
    if(!localStorage.getItem("score1"))
        localStorage.setItem("score1", JSON.stringify([ {'name':'unload', 'score': 0}, {'name':'unload', 'score': 0}, {'name':'unload', 'score': 0} ]) );

};

ManagerStorage.prototype.updateScore = function(newscore){
    console.log(localStorage.getItem("score1"))
    scores = JSON.parse(localStorage.getItem("score1"));

    for(var i = 0; i< scores.length; i++){
        if(scores[i].score < newscore) {
            console.log("new score");
            scores[i].name = mlevel.nameplayer;
            scores[i].score = newscore;
            localStorage.setItem("score1",  JSON.stringify(scores));
            break;
        }

    }

};

ManagerStorage.prototype.getScore = function(){
    return JSON.parse(localStorage.getItem("score1"));
};