//Hämta våra divar

let playGround = document.getElementById("playGround")

//Skapa alla element

//en div som blir figur
let player = document.createElement("div");
player.id = "player";
//key 1 eller 2 + knapp 1 och 2 


let buttonOne = document.createElement("button");
buttonOne.innerText = "1"
let buttonTwo = document.createElement("button");
buttonTwo.innerText = "2"
//knapp-start

let startButton = document.createElement("button");
startButton.innerText = "PLAY"

let result = document.createElement("div");
result.innerText = "Welcome to the Random 1-2 Game";
result.id = "result";

    // div för timer
    let timer= document.createElement("div");
    timer.id="timer";

    // variabel
    let second = 20;




playGround.append(player)
document.body.append(buttonOne, buttonTwo, startButton, timer, result)


//Slumpgenerator 1 eller 2 --grupp 1
let bottom = 0;

function createRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

randomNr = createRandom(1, 2);

document.addEventListener("keydown", e => {

    console.log("key", e.key);

    if (e.key == randomNr) {
        console.log("du gissade rätt");
        bottom += 20;
        player.style.bottom = bottom + "px";
        createRandom(1, 2);
        randomNr = createRandom(1, 2);
        result.innerHTML = "Right, one step closer - keep on going!";
        console.log(randomNr);
        console.log(player.style.bottom +"hej");

        if (bottom == 740) {
            console.log("grattis");
            
            //text när spelare går i mål
            console.log("Hamnar i if-satsen")
            //clearInterval(myTimer);
            document.body.style.backgroundColor = "lightblue"
            document.body.innerHTML = "VINNER"
            document.body.style.color = "blue"

            console.log("nu har vi nått 800 px");
        }
    }

    else {
        console.log("du gissade fel");
        result.innerHTML = "Wrong, try again";
    }

    
});

//OM man klickar på "knapp1"
buttonOne.addEventListener("click", function () {

    if (randomNr == 1) {
        console.log("Du gissade rätt");
        bottom += 20;
        player.style.bottom = bottom + "px";
        createRandom(1, 2);
        randomNr = createRandom(1, 2);
        result.innerHTML = "Right, one step closer - keep on going!";
        console.log(randomNr);

        if (bottom == 740) {
            console.log("grattis");
            
            //text när spelare går i mål
            console.log("Hamnar i if-satsen")
            //clearInterval(myTimer);
            document.body.style.backgroundColor = "light blue"
            document.body.innerHTML = "VINNER"
            document.body.style.color = "blue"

            console.log("nu har vi nått 800 px");
        }

    } else {
        result.innerHTML = "Wrong, try again";
        console.log("Fel");
    }

});

//OM man klickar på "knapp2"
buttonTwo.addEventListener("click", function () {

    if (randomNr == 2) {
        console.log("Du gissade rätt");
        bottom += 20;
        player.style.bottom = bottom + "px";
        createRandom(1, 2);
        randomNr = createRandom(1, 2);
        result.innerHTML = "Right, one step closer - keep on going!";
        console.log(randomNr);

        if (bottom == 740) {
            console.log("grattis");
            //text när spelare går i mål
            console.log("Hamnar i if-satsen")
            //clearInterval(myTimer);
            document.body.style.backgroundColor = "light blue"
            document.body.innerHTML = "VINNER"
            document.body.style.color = "blue"

            console.log("nu har vi nått 800 px");
        }

    } else {
        result.innerHTML = "Wrong, try again";
        console.log("Fel");
    }
}); 


//setInterval startklocka --grupp2
startButton.addEventListener("click", () => {
    
    let myTimer = setInterval(function() {
        second--
        timer.innerHTML = second;
        console.log(second);

// setinterval
if (second == 0) {

    console.log("Hamnar i if-satsen")
    clearInterval(myTimer);
    document.body.style.backgroundColor = "black"
    document.body.innerHTML = "GAME OVER"
    document.body.style.color = "white"
}
    }, 1000);
});





// Om vi hinner gör 2 banor -tävling


//if slumpad siffra ett steg framåt annars stå kvar --grupp1

//När man är framme -grattis texten + byt smiley till glad gubbe+ ljud --grupp3 

// Om vi hinner gör 2 banor -tävling