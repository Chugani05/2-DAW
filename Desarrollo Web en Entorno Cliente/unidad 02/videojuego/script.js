function initCanvas(){
    //variables
    let ctx = document.getElementById('my_canvas').getContext('2d');
    let backgroundImage = new Image(); //background
    let shipImage = new Image(); //ship
    let enemyShip1 = new Image(); //enemy 1
    let enemyShip2 = new Image(); //enemy 2

    //
    backgroundImage.src = '/imgs/background.png'; //canvas background
    shipImage.src = '/imgs/player_ship.png'; //ally ship
    //enemy ships
    enemyShip1.src = '/imgs/big_enemy_ship.png'; 
    enemyShip2.src = '/imgs/small_enemy_ship.png';

    //constants
    const cW = ctx.canvas.width; //700px
    const cH = ctx.canvas.height; //600px

    //enemy template
    let enemyTemplate = function(options){
        return {
            id: options.id || '',
            x: options.x || '',
            y: options.y || '',
            w: options.w || '',
            h: options.h || '',
            image:  options.image || enemyShip1

    }};

    //enemy groups
    let enemies = [
        //small enemy ships
        new enemyTemplate({id: '1', x: 100, y: -20, w: 50, h: 30}),
        new enemyTemplate({id: '2', x: 225, y: -20, w: 50, h: 30}),
        new enemyTemplate({id: '3', x: 350, y: -20, w: 50, h: 30}),
        new enemyTemplate({id: '4', x: 475, y: -20, w: 50, h: 30}),
        new enemyTemplate({id: '5', x: 600, y: -20, w: 50, h: 30}),
        new enemyTemplate({id: '6', x: 100, y: -70, w: 50, h: 30}),
        new enemyTemplate({id: '7', x: 225, y: -70, w: 50, h: 30}),
        new enemyTemplate({id: '8', x: 350, y: -70, w: 50, h: 30}),
        new enemyTemplate({id: '9', x: 475, y: -70, w: 50, h: 30}),
        new enemyTemplate({id: '10', x: 600, y: -70, w: 50, h: 30}),

        //big enemy ships
        new enemyTemplate({id: '11', x: 100, y: -220, w: 50, h: 30, image: enemyShip2}),
        new enemyTemplate({id: '12', x: 225, y: -220, w: 50, h: 30, image: enemyShip2}),
        new enemyTemplate({id: '13', x: 350, y: -220, w: 50, h: 30, image: enemyShip2}),
        new enemyTemplate({id: '14', x: 475, y: -220, w: 50, h: 30, image: enemyShip2}),
        new enemyTemplate({id: '15', x: 600, y: -220, w: 50, h: 30, image: enemyShip2}),
        new enemyTemplate({id: '16', x: 100, y: -270, w: 50, h: 30, image: enemyShip2}),
        new enemyTemplate({id: '17', x: 225, y: -270, w: 50, h: 30, image: enemyShip2}),
        new enemyTemplate({id: '18', x: 350, y: -270, w: 50, h: 30, image: enemyShip2}),
        new enemyTemplate({id: '19', x: 475, y: -200, w: 50, h: 30, image: enemyShip2}),
        new enemyTemplate({id: '20', x: 600, y: -200, w: 50, h: 30, image: enemyShip2}),
    ];

    //
    let renderEnemies = function(enemyList) {
        for (let i = 0; i < enemyList.length; i++) {
            console.log(enemyList[i]);
            ctx.drawImage(enemyList[i].image, enemyList[i].x, enemyList[i].y += .5, enemyList[i].w, enemyList[i].h);
            //detect collisions of enemy ships with the allied ship
            launcher.hitDetectLowerLevel(enemyList[i]);
        }
    };

    //
    function Launcher() {
        //missile location
        (this.y = 500),
        (this.x = cW * 0.5 - 25),
        (this.w = 100),
        (this.h = 100),
        this.direction,
        (this.bg = "white"), //missile color
        (this.misiles = []);

        this.gameStatus = {
            over: false,
            message: '',
            fillStyle: 'white',
            font: 'italic bold 36px Arial, sans-serif'
        }

        this.render = function () {
            if (this.direction === "left") {
                this.x -= 5;
            } else if (this.direction === "right") {
                this.x += 5;
            } else if (this.direction === "downArrow") {
                this.y += 5;
            } else if (this.direction === "upArrow") {
                this.y -= 5;
            }

        ctx.fillStyle = this.bg;
        ctx.drawImage(backgroundImage)

        }
    }

    //
    window.addEventListener("load", function(event) {
        initCanvas();
    });

};