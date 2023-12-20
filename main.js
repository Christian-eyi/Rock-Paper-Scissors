  let playerScore = 0;
      let cpuScore = 0;

      function gamePlay(playerOption) {
        const option = ['rock', 'paper', 'scissors'];
        const cpuOption = option[Math.floor(Math.random() * option.length)];
        const result = getWinner(playerOption, cpuOption);
        const resultElement = document.getElementById("result");
        resultElement.textContent = `You chose ${playerOption}. CPU chose ${cpuOption}. ${result}`;

        update(result); // Call update function with the result
      }

      function update(result) {
        const playerscoreElement = document.getElementById("playerscore");
        const cpuscoreElement = document.getElementById("cpuscore");

        if (result === "You win") {
          playerScore++;
        } else if (result === "CPU wins") {
          cpuScore++;
        }

        playerscoreElement.textContent = `Player Score: ${playerScore}`;
        cpuscoreElement.textContent = `CPU Score: ${cpuScore}`;
      }

      function getWinner(playerOption, cpuOption) {
        if (playerOption === cpuOption) {
          return "It's a tie";
        } else if (
          (playerOption === "paper" && cpuOption === "scissors") ||
          (playerOption === "scissors" && cpuOption === "rock") ||
          (playerOption === "rock" && cpuOption === "paper")
        ) {
          return "CPU wins";
        } else {
          return "You win";
        }
      }
   function resetScore() {

        playerScore = 0;
        cpuScore = 0;
        const playerscoreElement = document.getElementById("playerscore");
        const cpuscoreElement = document.getElementById("cpuscore");
        playerscoreElement.textContent = `Player Score: ${playerScore}`;
        cpuscoreElement.textContent = `CPU Score: ${cpuScore}`;
       
      }