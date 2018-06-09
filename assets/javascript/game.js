    // Your code here...

    var guessesLetters = "";
    var players = ["JORDAN", "DUNCAN", "BRYANT", "BARKLEY", "IVERSON", "BIRD", "CHAMBERLAIN",
     "JAMES"];
    var playerJersey = ["23", "21", "8", "34", "3", "33", "13",
     "23"];
    var playerDraft = ["1984", "1996", "1996", "1984", "1996", "1978", "1959",
     "2003"];
     var playerNickname = [
     "His Airness", 
     "The Big Fundamental", 
     "The Black Mamba", 
     "The Round Mound of Rebound", 
     "The Answer", 
     "The Hick From French Lick", 
     "The Stilt",
     "The King"];
     var playerFullName = ["Michael Jordan", "Tim Duncan", "Kobe Bryant", "Charles Barkley", "Allen Iverson", "Larry Bird", "Will Chamberlain",
     "Lebron James"];

    var lettersPlayersLastName = [];
    var numBlanks = 0;
    var answerKey = [];
    var wrongGuesses = [];
    var playerSelected = "";   
    var playerOrder = "";
    var winCounter = 0;
    var lossCounter = 0;
    var numGuesses = 7;
    var letterGuessed = "";
    var firstClue = "";
    var secondClue = "";
    var fullName = "";

    // Get Player Name //
    
    function gameStarts() {
      
        playerSelected = players[Math.floor(Math.random() * players.length)];

        lettersPlayersLastName = playerSelected.split("");

        // We count the number of letters in the word.
        numBlanks = lettersPlayersLastName.length;
      
        // FOR PLAYER NAME TEST
        console.log(playerSelected);

        // Player Order

        playerOrder = players.indexOf(playerSelected);
        console.log(playerOrder);

        numGuesses = 7;

        answerKey = [];

        guessesLetters = [];  

        for(i = 0; i < numBlanks; i++) { 
          answerKey.push('_')
        }

        // See Blanks

        console.log(answerKey);

        document.getElementById("answer-key").innerHTML = answerKey.join(" ");
        document.getElementById("wrongGuesses").innerHTML = guessesLetters.join(" ");
        document.getElementById("numGuesses").innerHTML = numGuesses;
        document.getElementById("loss-count").innerHTML = lossCounter; 
        document.getElementById("win-count").innerHTML = winCounter;
        document.getElementById("firstClue").innerHTML = firstClue;
        document.getElementById("secondClue").innerHTML = secondClue;
        document.getElementById("players-image").innerHTML = ""; 

      }

    // Checking to see if the letter guessed matches a letter in the word

    function checkLetters(letter) {


        var letterMatch = false;

        for (var i = 0; i < numBlanks; i++) {

            if (playerSelected[i] === letter) {
                letterMatch = true;
            }
            console.log(numBlanks);
            console.log(i);
            console.log(letterMatch);
        }

        if (letterMatch) {

            for (var j = 0; j < numBlanks; j++) {

                if (playerSelected[j] === letter) {
                    answerKey[j] = letter;
                }
            }
            console.log(answerKey);

        }

        else {
            guessesLetters.push(letter);
            numGuesses--;
        }
    }

    function giveClues() {
        if (numGuesses === 6) {
            var firstClue = playerJersey[playerOrder];

            document.getElementById("firstClue").innerHTML = "This player wore the jersey number of " + firstClue + ".";
                }

        if (numGuesses === 4) {
            var secondClue = playerNickname[playerOrder];

            document.getElementById("secondClue").innerHTML = "His nickname was " + secondClue + ".";
                }

        if (numGuesses === 1) {
            if(playerSelected === "JORDAN") {

                document.getElementById("players-image").innerHTML = "<img src='assets/javascript/images/jordan.jpg'>";    
            }
            if(playerSelected === "DUNCAN") {

                document.getElementById("players-image").innerHTML = "<img src='assets/javascript/images/duncan.jpg'>";    
            }
            if(playerSelected === "BRYANT") {

                document.getElementById("players-image").innerHTML = "<img src='assets/javascript/images/bryant.jpg'>";    
            }
            if(playerSelected === "BARKLEY") {

                document.getElementById("players-image").innerHTML = "<img src='assets/javascript/images/barkley.jpg'>";    
            }
            if(playerSelected === "IVERSON") {

                document.getElementById("players-image").innerHTML = "<img src='assets/javascript/images/iverson.jpg'>";    
            }
            if(playerSelected === "BIRD") {

                document.getElementById("players-image").innerHTML = "<img src='assets/javascript/images/bird.jpg'>";    
            }
            if(playerSelected === "CHAMBERLAIN") {

                document.getElementById("players-image").innerHTML = "<img src='assets/javascript/images/chamberlain.jpg'>";    
            }
            if(playerSelected === "JAMES") {

                document.getElementById("players-image").innerHTML = "<img src='assets/javascript/images/james.jpg'>";    
            }
                                 
        }


    }

    function roundComplete() {

        document.getElementById("answer-key").innerHTML = answerKey.join(" ");
        document.getElementById("numGuesses").innerHTML = numGuesses;
        document.getElementById("wrongGuesses").innerHTML = guessesLetters.join(" ");    


        if (lettersPlayersLastName.toString() === answerKey.toString()) {
            winCounter++;

            var fullName = playerFullName[playerOrder];

            alert("You won! " + fullName + " was the correct answer");  
            document.getElementById("win-count").innerHTML = winCounter; 
            gameStarts();
        }

        else if (numGuesses == 0) {
            lossCounter++;
            alert("You lost. Try Again!");           
            document.getElementById("loss-count").innerHTML = lossCounter; 
            gameStarts();
        }    

    }


    gameStarts();

    document.onkeyup = function(event) {

        var letterGuessed = String.fromCharCode(event.which).toUpperCase();
        checkLetters(letterGuessed);

        giveClues();
        
        roundComplete();

    };

