var computerNumber = Math.floor(Math.random() * 100);
var count = 0;
var array = new Array();
function myFun(){
    count++;
    console.log(computerNumber);
    var guessedNumber = document.getElementById("guess").value;
    if(count <= 10){
        if(computerNumber == guessedNumber){  
            document.getElementById("rightOrWrong").innerHTML = " congtrats YOU WIN!!!";   
            document.getElementById("rightOrWrong").style.background = "green";
            document.getElementById("guess").disabled = true;
            document.getElementById("submit").disabled = true;
            computerNumber = Math.floor(Math.random() * 100);
            array.length = 0;
            count=0;
            document.getElementById("resetButton").style.visibility = "visible";
            document.getElementById("three").style.visibility ="hidden";
           }else {
                document.getElementById("rightOrWrong").style.visibility ="visible";
                document.getElementById("previous").style.visibility ="visible";
                document.getElementById("rightOrWrong").innerHTML = "WRONG!!!"
                document.getElementById("rightOrWrong").style.background = "red";
                array.push(guessedNumber); 
                document.getElementById("previous").innerHTML = "Previous Guessess : "+array;  
                document.getElementById("three").style.visibility ="visible";
               if(computerNumber > guessedNumber){
                      document.getElementById("three").innerHTML = "LAST GUESS WAS LOW!!!";
                  }else{
                      document.getElementById("three").innerHTML = "LAST GUESS WAS HIGH!!!";
                  }
           }
    }else{        
              document.getElementById("guess").disabled = true;
              document.getElementById("submit").disabled = true;
              document.getElementById("rightOrWrong").innerHTML = "GAME OVER";
              document.getElementById("rightOrWrong").style.visibility ="visible";
              computerNumber = Math.floor(Math.random() * 100);
              array.length = 0;
              document.getElementById("resetButton").style.visibility = "visible";
              document.getElementById("three").style.visibility = "hidden";
    }
}

function restart(){
         document.getElementById('guess').value = '';
         count = 0;
         computerNumber = Math.floor(Math.random() * 100);
         document.getElementById("rightOrWrong").style.visibility="hidden";
         document.getElementById("previous").style.visibility="hidden";
         array.length = 0;
         document.getElementById("guess").disabled = false;
         document.getElementById("submit").disabled = false;
         document.getElementById("resetButton").style.visibility = "hidden";
         document.getElementById("three").style.visibility ="hidden";
}

