
function datatypes(menu){
    var selection=menu.options[menu.selectedIndex].text;
    var isCorrect = false;
    var correctAnswer = "Int";
    var score = 0;
    var noOfQuestions = 5;

    console.log(selection);
    console.log(isCorrect);
    console.log(correctAnswer);
    
   

    if(selection == correctAnswer){
      isCorrect=true;
      console.log(isCorrect);
      score ++;
      console.log(score);
      moveProgressBar();
    }else{
      console.log(isCorrect);
      console.log(score);
      moveProgressBar();
    }
    
    }

    function moveProgressBar() {
    var progress = noOfQuestions;
    
  }
