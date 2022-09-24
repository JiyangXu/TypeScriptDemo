import ScorePanel from "./ScorePanel";
import Food from "./Food";
import Snake from "./Snake";

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    direction: string = "";

    isLive= true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.move();
    }

    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key;
        console.log(event.key)
    }

    move() {
        /*
        * up top -
        * down top +
        * left left -
        * right left +
        * */
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case "ArrowUp":
                Y -= 10;
                break;
            case "ArrowDown":
                Y += 10;
                break;
            case "ArrowLeft":
                X -= 10;
                break;
            case "ArrowRight":
                X += 10;
                break;
        }

        this.checkEat(X,Y);
        //    modify snake direction
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e:unknown){
            this.isLive=false;
            if(e instanceof Error)
                alert(e.message);
        }
        this.isLive && setTimeout(this.move.bind(this), 300 - (this.scorePanel.level-1) * 30)
    }

    checkEat(X:number, Y:number){
        if( X===this.food.X && Y===this.food.Y){
            this.food.change();
            this.scorePanel.incrementalScore();
            this.snake.addBody();
        }
    }
}

export default GameControl;