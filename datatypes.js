var score=0;


function datatypes(menu, correct){



    var selection=menu.options[menu.selectedIndex].text;
    var correctAnswer = menu.options[menu.Index = correct].text;
    var isCorrect = false;
   // var correctAnswer = document.getElementById("menu").selectedIndex.text = correct;
   
   // var score = 0;
    //var noOfQuestions = 5;

   console.log(selection);
    console.log(isCorrect);
    console.log(correctAnswer);
    //console.log(selectedValue);
    //console.log(correctValue);

   
   
  
    if(selection == correctAnswer){
      isCorrect=true;
      console.log(isCorrect);
      score += 1;
      console.log(score);
      move();
    }else{
      score=score;
      console.log(isCorrect);
      console.log(score);
      
      move();
    }
    
    }


    function move() {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}


