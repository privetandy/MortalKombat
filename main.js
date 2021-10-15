const player1 = {
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['axe','sword','knife'],
    atack: function (){
        console.log(player1.name + 'Fight...')
    }
};


const player2 = {
    name: 'Sonya',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['axe','sword','knife'],
    atack: function (){
        console.log(player2.name + 'Fight...')
    }
};


function createPlayer(playercl, personage ) {
    const player = document.createElement('div');
    player.classList.add(playercl);
    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');
    const character = document.createElement('div');
    character.classList.add('character');
    const life = document.createElement('div');
    life.classList.add('life');
    const name = document.createElement('div');
    name.classList.add('name');
    const img = document.createElement ('img');
    const arenas = document.querySelector('.arenas')

    player.appendChild(progressbar);
    player.appendChild(character);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(img);
    arenas.appendChild(player)
    

    img.src = personage.img;
    name.innerText = personage.name;
    life.style.width = personage.hp + '%' ;

};

createPlayer('player1', player1);
createPlayer('player2', player2);


