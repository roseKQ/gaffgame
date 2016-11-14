var score=0;
var attempts=0;

function datatypes(menu, correct){


    var selection=menu.options[menu.selectedIndex].text;
    var correctAnswer = menu.options[menu.Index = correct].text;
    var isCorrect = false;
   
    console.log(selection);
    console.log(isCorrect);
    console.log(correctAnswer);
     
  
    if(selection == correctAnswer){
      isCorrect=true;
      console.log(isCorrect);
      score += 1;
      attempts+=1;
      console.log(score);
     
      //move();
      
     $('.progress-bar').css('width', 40 + '%');
    //$('#displayScore').html('<h2> Your score is' +score+'/5</h2>').show();
    }else{
      score=score;
      console.log(isCorrect);
      console.log(score);
      attempts+=1
    $('.progress-bar').css('width', 40 + '%');
    // move();
    
   
  }
  
  
  

  


    /*function move() {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            $('.progress-bar').css('width', 20 + '%');
    
        }
    }
}*/
if(attempts == 5){
       $('#displayScore').html('<h2> You got ' +score+ ' correct.</h2>').show();
    }
}

 


