window.onload = game;
var square = document.querySelectorAll('.square');
var wrapper = document.getElementById('wrapper');   
var reset = document.createElement('div');

function game() { 
    var player1 = document.getElementById('player1');
    var player2 = document.getElementById('player2');
    player1.classList.add('active');
    for(var i = 0;i < square.length;i++)
    {
        square[i].addEventListener("click", pick);
    }
}

function pick() {
    if(player1.classList.contains('active'))
    {
        if(!(this.classList.contains("X") || this.classList.contains("O")))
        {
            this.classList.add('X');
            this.classList.add('check');
            if(checkWinner("X"))
            {
                winner('player1-won','PLAYER1 HAS WON');
            }
            else 
            {
                checkTie();  
            }
            player2.classList.add('active');
            player1.classList.remove('active');
        }
    } 
    else 
    {
        if(!(this.classList.contains("O") || this.classList.contains("X")))
        {
            this.classList.add('O');
            this.classList.add('check');
            if(checkWinner("O"))
            {   
                winner('player2-won','PLAYER2 HAS WON');
            }
            else 
            {
                checkTie();
            }
            player1.classList.add('active');
            player2.classList.remove('active');
        }
    }
}

function checkWinner(symbol) {
    var square1 = document.querySelector('.square1');
    var square2 = document.querySelector('.square2');
    var square3 = document.querySelector('.square3');
    var square4 = document.querySelector('.square4');
    var square5 = document.querySelector('.square5');
    var square6 = document.querySelector('.square6');
    var square7 = document.querySelector('.square7');
    var square8 = document.querySelector('.square8');
    var square9 = document.querySelector('.square9');
    var square1checking = document.querySelector('.square1').classList.contains(symbol);
    var square2checking = document.querySelector('.square2').classList.contains(symbol);
    var square3checking = document.querySelector('.square3').classList.contains(symbol);
    var square4checking = document.querySelector('.square4').classList.contains(symbol);
    var square5checking = document.querySelector('.square5').classList.contains(symbol);
    var square6checking = document.querySelector('.square6').classList.contains(symbol);
    var square7checking = document.querySelector('.square7').classList.contains(symbol);
    var square8checking = document.querySelector('.square8').classList.contains(symbol);
    var square9checking = document.querySelector('.square9').classList.contains(symbol);
    if(square1checking && square2checking && square3checking)
    {
        square1.classList.add('win-active');
        square2.classList.add('win-active');
        square3.classList.add('win-active');
        return true;
    }
    else if(square4checking && square5checking && square6checking)
    {
        square4.classList.add('win-active');
        square5.classList.add('win-active');
        square6.classList.add('win-active');
        return true;
    }
    else if(square7checking && square8checking && square9checking)
    {
        square7.classList.add('win-active');
        square8.classList.add('win-active');
        square9.classList.add('win-active');
        return true;checking
    }
    else if (square1checking && square4checking && square7checking)
    {
        square1.classList.add('win-active');
        square4.classList.add('win-active');
        square7.classList.add('win-active');
        return true;
    }
    else if(square2checking && square5checking && square8checking)
    {
        square2.classList.add('win-active');
        square5.classList.add('win-active');
        square8.classList.add('win-active');
        return true;
    }
    else if (square3checking && square6checking && square9checking)
    {
        square3.classList.add('win-active');
        square6.classList.add('win-active');
        square9.classList.add('win-active');
        return true;
    }
    else if (square1checking && square5checking && square9checking)
    {
        square1.classList.add('win-active');
        square5.classList.add('win-active');
        square9.classList.add('win-active');
        return true;
    }
    else if (square3checking && square5checking && square7checking)
    {
        square3.classList.add('win-active');
        square5.classList.add('win-active');
        square7.classList.add('win-active');
        return true;
    }
    else {
        return false;
    }

}
function checkTie() {
    var checkSquare = document.getElementsByClassName('check');
    if(checkSquare.length == 9)
    {
        winner('draw-game', 'It\'s a Tie!');
    }
}
function winner(playerWinner, playerWinnerText) {
    setTimeout(function() 
        {
        var playerWinning = document.getElementById('player-winner');
        // var player2Win = document.querySelector(`.${CSS.escape(playerWinner)}`);
        playerWinning.classList.add(playerWinner)
        playerWinning.classList.remove('hide');
        document.querySelector('.winner-box h1').innerHTML = playerWinnerText;
        // document.body.insertBefore(reset, wrapper);
        // reset.classList.add(playerWinner);
        // reset.innerHTML = '<div class="winner-box"><h1>'+playerWinnerText+'</h1>' +'<div class="again"><i class="fa fa-repeat" aria-hidden="true"></i><a href="#">AGAIN</a></div></div>';
        wrapper.classList.add('hide');
        var again = document.querySelector('.again');
        again.addEventListener('click', function(){
                for(var i=0;i<square.length;i++)
            {
                square[i].classList.remove('check');
                square[i].classList.remove('X');
                square[i].classList.remove('O');
                square[i].classList.remove('win-active');

            }
            wrapper.classList.remove('hide');
            playerWinning.classList.add('hide');
            playerWinning.classList.remove(playerWinner);
        });
    }, 300);
}