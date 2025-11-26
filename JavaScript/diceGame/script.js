function start() {
  console.log("Game Started");
  document.getElementById("rollDice1").disabled = false;
  document.getElementById("restartGame").disabled = false;
  document.getElementById("startGame").disabled = true;
}
function restart() {
  window.location.reload();
}
function p1Play() {
  console.log("Player One Playing");
  let score = Number(document.getElementById("p1sc").innerText);

  //   Dice Face
  const DF = Math.floor(Math.random() * 6) + 1;

  // Dice Photo reflector using switch case 
  switch (DF) {
    case 1: {
      document.getElementById("p1dice").src = "./Dice 1.png";
      break;
    }
    case 2: {
      document.getElementById("p1dice").src = "./Dice 2.png";
      break;
    }
    case 3: {
      document.getElementById("p1dice").src = "./Dice 3.png";
      break;
    }
    case 4: {
      document.getElementById("p1dice").src = "./Dice 4.png";
      break;
    }
    case 5: {
      document.getElementById("p1dice").src = "./Dice 5.png";
      break;
    }
    case 6: {
      document.getElementById("p1dice").src = "./Dice 6.png";
      break;
    }
  }

  // At df=6 disable player and switch to another
  if (DF === 6) {
    document.getElementById("rollDice1").disabled = true;
    document.getElementById("rollDice2").disabled = false;
  } else {
    score = score + DF;
    document.getElementById("p1sc").innerText = score;
  }
}
function p2Play() {
  console.log("Player Two Playing");
  let score = Number(document.getElementById("p2sc").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;

  // short cut to write String or switch case using backTick
  document.getElementById("p2dice").src = `./Dice ${DF}.png`;

  if (DF === 6) {
    document.getElementById("rollDice1").disabled = false;
    document.getElementById("rollDice2").disabled = true;
  } else {
    score = score + DF;
    document.getElementById("p2sc").innerText = score;
  }
}
