window.onload = game;
    var square = document.querySelectorAll('.square');
    var wrapper = document.getElementById('wrapper');   
    var player1 = document.getElementById('player1');
    var player2 = document.getElementById('player2');
    var reset = document.createElement('div');

function game() {  
    player1.classList.add('active');
    for(var i = 0;i < square.length;i++)
        {
            square[i].addEventListener("click", pick);
        }
}

function pick() {
        if(player1.classList.contains('active'))
        {
           if(!(this.classList.contains("fa-times") || this.classList.contains("fa-circle-o")))
            {
                this.classList.add('fa-times');
                this.classList.add('check');
                if(checkWinner("fa-times"))
                    {
                        setTimeout(function()
                        {
                            document.body.insertBefore(reset, wrapper);
                            reset.classList.add('player1-won');
                            reset.innerHTML = '<h1>PLAYER1 HAS WON!</h1>' + '<div class="again"><i class="fa fa-repeat" aria-hidden="true"></i><a href="#">AGAIN</a></div>';
                            var player1Win = document.querySelector('.player1-won');
                            wrapper.style.display = 'none';
                            player1Win.style.display = 'block';
                            var again = document.querySelector('.again');
                            again.addEventListener('click', function(){
                                for(var i=0;i<square.length;i++)
                                    {
                                        square[i].classList.remove('check');
                                        square[i].classList.remove('fa-times');
                                        square[i].classList.remove('fa-circle-o');
                                    }
                                var target = wrapper.children[0];
                                wrapper.style.display = 'block';
                                target.parentNode.removeChild(target);
                                player1Win.classList.remove('player1-won');
                                player1Win.style.display = 'none';
                            });
                        },300);
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
           if(!(this.classList.contains("fa-circle-o") || this.classList.contains("fa-times")))
            {
                this.classList.add('fa-circle-o');
                this.classList.add('check');
                if(checkWinner("fa-circle-o"))
                {   
                    setTimeout(function() 
                    {
                        document.body.insertBefore(reset, wrapper);
                        reset.classList.add('player2-won');
                        reset.innerHTML = '<h1>PLAYER2 HAS WON!</h1>' +'<div class="again"><i class="fa fa-repeat" aria-hidden="true"></i><a href="#">AGAIN</a></div>';
                        var player2Win = document.querySelector('.player2-won');
                        wrapper.style.display = 'none';
                        player2Win.style.display = 'block';
                        var again = document.querySelector('.again');
                        again.addEventListener('click', function(){
                            for(var i=0;i<square.length;i++)
                                {
                                    square[i].classList.remove('check');
                                    square[i].classList.remove('fa-times');
                                    square[i].classList.remove('fa-circle-o');

                                }
                            var target = wrapper.children[0];
                            wrapper.style.display = 'block';
                            target.parentNode.removeChild(target);
                            player2Win.classList.remove('player2-won');
                            player2Win.style.display = 'none';
                        });
                    }, 300);
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
    var square1 = document.querySelector('.square1').classList.contains(symbol);
    var square2 = document.querySelector('.square2').classList.contains(symbol);
    var square3 = document.querySelector('.square3').classList.contains(symbol);
    var square4 = document.querySelector('.square4').classList.contains(symbol);
    var square5 = document.querySelector('.square5').classList.contains(symbol);
    var square6 = document.querySelector('.square6').classList.contains(symbol);
    var square7 = document.querySelector('.square7').classList.contains(symbol);
    var square8 = document.querySelector('.square8').classList.contains(symbol);
    var square9 = document.querySelector('.square9').classList.contains(symbol);
    if(square1 && square2 && square3){
        firstRow();
        return true;
    }
    else if(square4 && square5 && square6)
    {
        secondRow();
        return true;
    }
    else if(square7 && square8 && square9)
    {
        thirdRow();
        return true;
    }
    else if (square1 && square4 && square7)
    {
        firstCol();
        return true;
    }
    else if(square2 && square5 && square8)
    {
        secondCol();
        return true;
    }
    else if (square3 && square6 && square9)
    {
        thirdCol();
        return true;
    }
    else if (square1 && square5 && square9)
    {
        backSlash();
        return true;
    }
    else if (square3 && square5 && square7)
    {
        slash();
        return true;
    }
    else {
        return false;
    }
    
}

function firstRow() {
    wrapper.insertAdjacentHTML("afterbegin", '<div class="first-row"></div>');
}
function secondRow() {
    wrapper.insertAdjacentHTML("afterbegin", '<div class="second-row"></div>');
}
function thirdRow() {
    wrapper.insertAdjacentHTML("afterbegin", '<div class="third-row"></div>');
}
function firstCol() {
    wrapper.insertAdjacentHTML("afterbegin", '<div class="first-col"></div>');
}
function secondCol() {
    wrapper.insertAdjacentHTML("afterbegin", '<div class="second-col"></div>');
}
function thirdCol() {
    wrapper.insertAdjacentHTML("afterbegin", '<div class="third-col"></div>');
}
function backSlash() {
    wrapper.insertAdjacentHTML("afterbegin", '<div class="back-slash"></div>');
}
function slash() {
    wrapper.insertAdjacentHTML("afterbegin", '<div class="slash"></div>');
}
function checkTie() {
    var checkSquare = document.getElementsByClassName('check');
    if(checkSquare.length == 9)
        {
         setTimeout(function() 
                {
                    document.body.insertBefore(reset, wrapper);
                    reset.classList.add('draw-game');
                    reset.innerHTML = '<h1>IT\'S A TIE!</h1>' +'<div class="again"><i class="fa fa-repeat" aria-hidden="true"></i><a href="#">AGAIN</a></div>';
                    var drawGame = document.querySelector('.draw-game');
                    wrapper.style.display = 'none';
                    drawGame.style.display = 'block';
                    var again = document.querySelector('.again');
                    again.addEventListener('click', function(){
                        for(var i=0;i<square.length;i++)
                            {
                                square[i].classList.remove('check');
                                square[i].classList.remove('fa-times');
                                square[i].classList.remove('fa-circle-o');

                            }
                        wrapper.style.display = 'block';
                        drawGame.classList.remove('draw-game');
                        drawGame.style.display = 'none';
                    });
                }, 300);
        }
}