import ScorePanel from "./ScorePanel";
import Food from "./Food";
import Snake from "./Snake";

class GameControl{
    snake: Snake;
    food:Food;
    scorePanel:ScorePanel;

    direction:string ="";

    constructor() {
        this.snake = new Snake();
        this.food= new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    init(){
        document.addEventListener('keydown',this.keydownHandler.bind(this))
    }

    keydownHandler(event:KeyboardEvent){
        this.direction = event.key;
    }
}

export default GameControl;