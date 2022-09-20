class ScorePanel{
    score=0;
    level=1;

    maxLevel:number;
    upScore:number;

    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    constructor(maxLevel=10, upScore=10) {
        this.scoreEle= document.getElementById("score")!;
        this.levelEle= document.getElementById("level")!;
        this.maxLevel=maxLevel;
        this.upScore=upScore;
    }

    incrementalScore(){
        //this.score++
        this.scoreEle.innerHTML=++this.score+'';

        if(this.score % this.upScore===0){
            this.levelUp();
        }
    }

    levelUp(){
        if(this.level <this.maxLevel)
            this.levelEle.innerHTML= ++this.level+"";
    }
}



const scorePanel = new ScorePanel();
for(let i=0; i<200;i++){
    scorePanel.incrementalScore();
}

export default ScorePanel;