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

function changeHp (player) {
    const playerLife = document.querySelector('.player'+ player.player +' .life');
    player.hp -= Math.ceil(Math.random() * 20);
    playerLife.style.width = player.hp + '%';

    if (player.hp <= 0 ) {
        playerLife.style.width = '0%';
        player.hp = 0;
    } 
    

    if (player.hp <= 0) {
        arenas.appendChild(playerLose(winer()));
        randomButton.disabled = true;

    } 

   
};

function winer() {
    const win1 = player1.name;
    const win2 = player2.name;    
    if (player1.hp <= 0) {
        return win2
     } else if (player2.hp <= 0) {
        return win1};

};


function playerLose(name) {
    const loseTitle = createElement('div', 'loseTitle');
    loseTitle.innerText = name + ' wins';

    return loseTitle;
}

randomButton.addEventListener('click', function () {
    console.log('####: Click Random Button')

    changeHp(player1);
    changeHp(player2);
    
})

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));


