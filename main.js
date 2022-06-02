const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');


const player1 = {
    player: 1,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['axe','sword','knife'],
    atack: function (name){
        console.log(name + 'Fight...');
    }
};


const player2 = {
    player: 2,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['axe','sword','knife'],
    atack: function (name){
        console.log(name + 'Fight...');
    }
};

function createElement(tags, className){
    const tag = document.createElement(tags);
    if (className) {
    tag.classList.add(className);
    }

    return tag;
};


function createPlayer(personage) {
    const player =  createElement('div', 'player' + personage.player);
    const progressbar =  createElement('div', 'progressbar');
    const character =  createElement('div', 'character');
    const life =  createElement('div', 'life');
    const name =  createElement('div', 'name');
    const img = createElement ('img');
    
    img.src = personage.img;
    name.innerText = personage.name;
    life.style.width = personage.hp + '%' ;

    player.appendChild(progressbar);
    player.appendChild(character);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(img);    
           
    return player;
    };


function damage () {
return Math.ceil(Math.random() * 20);
};


function changeHp (player) {
    const playerLife = document.querySelector('.player'+ player.player +' .life');
    player.hp -= damage();
    
    if (player.hp <= 0) {
        player.hp = 0;
    };    

    playerLife.style.width = player.hp + '%'; 
};

function changeHpReset (player) {
    const playerLife = document.querySelector('.player'+ player.player +' .life');
    player.hp =100;
    playerLife.style.width = player.hp + '%'; 
};




function winer() {
    const win1 = player1.name;
    const win2 = player2.name;  
    const friendship = 'friendship'  
    if ((player1.hp <= 0) && (player2.hp <= 0)) {
        return friendship
    } else if (player1.hp <= 0) {
        return win2
     } else if (player2.hp <= 0) {
        return win1};  
     };      


function playerLose(name) {
    const loseTitle = createElement('div', 'loseTitle');
    loseTitle.innerText = name + ' wins';

    return loseTitle;
}

function endGame() {
    if ((player1.hp <= 0) || (player2.hp <= 0)) {
        randomButton.innerText = 'Reset';
        arenas.appendChild(playerLose(winer()))
       };
    };


    
function restartGame() {
    randomButton.innerText = 'Random';
    changeHpReset(player1);
    changeHpReset(player2);
    const title = document.querySelector('.loseTitle');
    title.remove();
};   



randomButton.addEventListener('click', function () {
    console.log('####: Click Random Button')

    if ((player1.hp > 0) && (player2.hp > 0)) {
    changeHp(player1);
    changeHp(player2);
    endGame();
    console.log(player1.hp);
    console.log(player2.hp);} else if ((player1.hp <= 0) || (player2.hp <= 0))
    restartGame();
        
    
});



arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));

