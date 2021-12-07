//Hämta våra divar

let playGround=document.getElementById("playGround")

//Skapa alla element

    //en div som blir figur
    let player= document.createElement("div");
    player.id="player";
    //key 1 eller 2 + knapp 1 och 2 
    
    let buttonOne= document.createElement("button");
    buttonOne.innerText="1"
    let butttonTwo= document.createElement("button");
    butttonTwo.innerText="2"
    //knapp-start
    
    let startButton= document.createElement("button");   
    startButton.innerText="PLAY"


playGround.append(player)
document.body.append(buttonOne, butttonTwo, startButton)



//Slumpgenerator 1 eller 2 --grupp 1

//setInterval startklocka --grupp2

//if slumpad siffra ett steg framåt annars stå kvar --grupp1

//När man är framme -grattis texten + byt smiley till glad gubbe+ ljud --grupp3 

function finnish() {
    // score = när man vinner
    if (player == 10){           //poäng 

    // ljud när någon går i mål
    var sound = document.getElementById("sound");
    sound.play();
    console.log(sound);

    //text när spelare går i mål
    let finnishline = document.getElementById("text_finnishline");
    finnishline.innerHTML = player + " " + "</ be>" + "<h2>garttis</h2>" 

    console.log(finnishline);
}
}

finnish();
console.log(finnish);
// kalla på funktionen

sound.play();
console.log(sound);

// Om vi hinner gör 2 banor -tävling