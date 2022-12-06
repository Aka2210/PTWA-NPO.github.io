// game view variables
CANVAS_WIDTH = 600;
CANVAS_HEIGHT = 400;
IMAGE_PATH = "./asset/image/";
BG_PATH = IMAGE_PATH + "bg001.png";
FONT_STYLE = "bold 35px Courier";
BLACK = "#000000";
BLUE = "#48807d";

// game view setting
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
const background = new Image();
background.src = BG_PATH;
ctx.font = FONT_STYLE;
ctx.fillStyle = BLACK;

// game variables
let score = 0;
let correct = 0;
let mistake = 0;
let gameFrame = 0;
const startBtn = document.getElementById('startBtn')
let gestures = [];
let numbers = [];
let points = [];

function startScreen(){
    ctx.fillStyle = BLUE;
    ctx.fillText('準備好了嗎?', 215, canvas.height/2);
    requestAnimationFrame(startScreen);
}
startScreen();

startBtn.addEventListener('click', (e) => {
    console.log(e);
    animate();
})

const npc = new Npc();

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    npc.draw();
    ctx.fillText('將數字連上正確的手勢吧！', 65, 52);
    let x = 450;
    let y = 80;
    for (let i = 1; i < 6; i++){
        create_ans(i, y);
        create_topic(i, y);
        y += 60;
    }
    draw_view();
    gameFrame++;
    requestAnimationFrame(animate);
}

function draw_view() {
    for (let i = 0; i < 5; i++){
        gestures[i].draw();
        numbers[i].draw();
    }
    points.forEach(point =>{
        point.draw();
        }
    );
}

function create_ans(i, y){
    path = IMAGE_PATH + "ans_" + i + ".jpg";
    gesture = new Gesture(450, y, path);
    gestures.push(gesture);
    create_point(i, gesture.x-50, gesture.y+25);
}
function create_topic(i, y){
    y += 40;
    number = new Number(i, 50, y, BLACK, 40, true);
    numbers.push(number);
    create_point(i, number.x+50, number.y-10);
}
function create_point(ans, x, y){
    point = new Point(ans, x, y);
    points.push(point);
}

function level1 (){
    const startBtn = document.getElementById('startBtn');
    startBtn.addEventListener('click', function(){
        // checkAnswer();
        // update game
    });
}
level1();

function checkAnswer(){
    document.querySelectorAll('button').forEach(e => {
        let id = e.getAttribute('id');
        e.addEventListener('click', function() {
        console.log( id + ' was clicked!');
        if (id === 'Btn3'){
            document.getElementById('correct').play();
            alert('太棒了!!');
            }
            if (id === "Btn1" || id === "Btn2"|| id === "Btn4"|| id === "Btn5"
            || id === "Btn6"|| id === "Btn7"|| id === "Btn8"|| id === "Btn9"){
                document.getElementById('wrong').play();
            }
        });
    });
}


function level2 (){
    const nextLevelBtn = document.getElementById('nextLevel');
    nextLevelBtn.addEventListener('click', function(){
   
        nextLevelBtn.removeEventListener('click', nextLevelBtn, true);
    });
}
level2();




