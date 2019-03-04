//  GLOBAL VARIABLES
//  toons object contains the different character values, including name, health, attack damage and their image relative url
const toons = {
  samus: {name: 'samus', health: 180, attack: 25, img:'./assets/images/samus-16bit.png', imgPlayer: './assets/images/samus-16bit-player.png', imgEnemy:'./assets/images/samus-16bit-enemy.png'},
  mario: {name: 'mario', health: 120, attack: 13, img:'./assets/images/mario-16bit.png', imgPlayer: './assets/images/mario-16bit-player.png', imgEnemy:'./assets/images/mario-16bit-enemy.png'},
  spidey: {name: 'spidey', health: 100, attack: 10, img:'./assets/images/spidey-16bit.png', imgPlayer: './assets/images/spidey-16bit-player.png', imgEnemy:'./assets/images/spidey-16bit-enemy.png'},
  sonic: {name: 'sonic', health: 150, attack: 18, img:'./assets/images/sonic-16bit.png', imgPlayer: './assets/images/sonic-16bit-player.png', imgEnemy:'./assets/images/spidey-16bit-enemy.png'},
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

//  choose character function
//  function chooseToon() {
//  for (i=0; i<enemyArr.length;i++){

$(document).ready(function() {
  
  const enemyArr = Object.keys(toons);
  let round=0;
  $('.toon-icon').click(function(){
  if(round===0){
    let playerToon = $(this).find(">:first-child").text();
    let pToonImage = $('<img id="p-toon">').attr('src', toons[playerToon].imgPlayer);
    $('#player-toon').append(pToonImage);
    enemyArr.splice(enemyArr.indexOf(playerToon),1);
    $('#toon-select').css('width',"750px");
    $(this).remove();
  }
  else if(round===1) {
    let enemyToon = $(this).find(">:first-child").text();
    let eToonImage = $('<img id="p-toon">').attr('src', toons[enemyToon].imgEnemy);
    $('#defender-toon').append(eToonImage);
    enemyArr.splice(enemyArr.indexOf(enemyToon),1);
    $('#toon-select').css('width',"500px");
    $(this).remove();
  }
  else if (round===2){
    alert('final round');
  }
  else{
    alert('donezo');
  }
  round++;
  });
});


// $(".toon-icon").on("click", function() {
//   $(".toon-icon").detach().appendTo("#player-toon");
// });
// something.onmouseover = function() {
//   this.style.backgroundColor = 'red';
// }
// 'url(./assets/images/sonic-16bit-player.png)'
