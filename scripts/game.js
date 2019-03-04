//  GLOBAL VARIABLES
//  toons object contains the different character values, including name, health, attack damage and their image relative url
const toons = {
  samus: {name: 'samus', health: 180, attack: 20, img:'./assets/images/samus-16bit.png', imgPlayer: './assets/images/samus-16bit-player.png', imgEnemy:'./assets/images/samus-16bit-enemy.png'},
  mario: {name: 'mario', health: 120, attack: 8, img:'./assets/images/mario-16bit.png', imgPlayer: './assets/images/mario-16bit-player.png', imgEnemy:'./assets/images/mario-16bit-enemy.png'},
  spidey: {name: 'spidey', health: 100, attack: 14, img:'./assets/images/spidey-16bit.png', imgPlayer: './assets/images/spidey-16bit-player.png', imgEnemy:'./assets/images/spidey-16bit-enemy.png'},
  sonic: {name: 'sonic', health: 150, attack: 12, img:'./assets/images/sonic-16bit.png', imgPlayer: './assets/images/sonic-16bit-player.png', imgEnemy:'./assets/images/sonic-16bit-enemy.png'},
}

const toonArr = Object.keys(toons);


//  render characters selection images 
function renderToons() {
  $('#toon-select').empty();
  for (var i=0;i < toonArr.length; i++){
    let thisToon = toonArr[i];
    let toonDiv= $('<div>').attr('class', 'toon-icon');
    let pName = $("<p id='toon-name'>").text(toons[thisToon].name);
    toonDiv.append(pName);
    let pImage = $('<img>').attr('src', toons[thisToon].img);
    toonDiv.append(pImage);
    let pHealth = $("<p id='health'>").text((toons[thisToon].health) + 'hp');
    toonDiv.append(pHealth);
    $("#toon-select").append(toonDiv);
    }
};

renderToons();

//  CHOOSE CHARACTER
$(document).ready(function() {
  
  const enemyArr = Object.keys(toons);
  let round=0;
  let heroName = '';
  let heroHP = 0;
  let heroATK = 0;
  let defenderName = '';
  let defenderHP = 0;
  let defenderATK = 0;

  $('.toon-icon').click(function(){
  if(round===0){
    let playerToon = $(this).find(">:first-child").text();
    let pToonImage = $('<img id="p-toon">').attr('src', toons[playerToon].imgPlayer);
    $('#player-toon').append(pToonImage);
    enemyArr.splice(enemyArr.indexOf(playerToon),1);
    $('#toon-select').css('width',"750px");
    $(this).remove();
    heroName = toons[playerToon].name;
    heroHP = toons[playerToon].health;
    heroATK = toons[playerToon].attack;
  }
  else if(round===1) {
    let enemyToon = $(this).find(">:first-child").text();
    let eToonImage = $('<img id="p-toon">').attr('src', toons[enemyToon].imgEnemy);
    $('#defender-toon').append(eToonImage);
    enemyArr.splice(enemyArr.indexOf(enemyToon),1);
    $('#toon-select').css('width',"500px");
    $(this).remove();
    defenderName = toons[enemyToon].name;
    defenderHP = toons[enemyToon].health;
    defenderATK = toons[enemyToon].attack;
  }
  else if (round===2){
    let enemyToon = $(this).find(">:first-child").text();
    let eToonImage = $('<img id="p-toon">').attr('src', toons[enemyToon].imgEnemy);
    $('#defender-toon').append(eToonImage);
    enemyArr.splice(enemyArr.indexOf(enemyToon),1);
    $('#toon-select').css('width',"250px");
    $(this).remove();
    defenderName = toons[enemyToon].name;
    defenderHP = toons[enemyToon].health;
    defenderATK = toons[enemyToon].attack;
  }
  else{
    let enemyToon = $(this).find(">:first-child").text();
    let eToonImage = $('<img id="p-toon">').attr('src', toons[enemyToon].imgEnemy);
    $('#defender-toon').append(eToonImage);
    enemyArr.splice(enemyArr.indexOf(enemyToon),1);
    $('#toon-select').css('width',"250px");
    $(this).remove();
    defenderName = toons[enemyToon].name;
    defenderHP = toons[enemyToon].health;
    defenderATK = toons[enemyToon].attack;
  }
  round++;
  });


  $('#attack-btn').click(function(){
    let defenderImage = $('<img id="p-toon">').attr('src', toons[defenderName].imgEnemy);
    let heroImage = $('<img id="p-toon">').attr('src', toons[heroName].imgPlayer);
    let graveWidth = 250*(round-1)

    if(enemyArr.length<=2) {
      heroHP-=defenderATK;
      defenderHP-=heroATK;
      heroATK+=8
  
      if (defenderHP<0){
        console.log('defender dead');
        $('#enemy-toons').css('width',String(graveWidth))
        $('#enemy-toons').append(defenderImage);
        $('#defender-toon #p-toon').attr('src','');
      }
      else if (heroHP<=0){
        console.log('hero dead');
        $('#enemy-toons').append(heroImage);
      }
      else {
        $('#log-txt').html(heroName + ' hits ' + defenderName + ' for ' + heroATK + ' dmg! ' + defenderName + ' hits back for ' + 
        defenderATK + ' dmg. ' + heroName + ' is down to ' + heroHP + ' & ' + defenderName + ' is at ' + defenderHP + '...');
      }
    }
  });

  $('#reset-btn').click(function(){
    enemyArr = Object.keys(toons);
    round=0;
    heroName = '';
    heroHP = 0;
    heroATK = 0;
    defenderName = '';
    defenderHP = 0;
    defenderATK = 0;

    renderToons();
  });
});


