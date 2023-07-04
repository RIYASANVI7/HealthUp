function submitAnswers(){
	var total = 15;
	var score = 0;
	var answers;
	// Get User Input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	var q6 = document.forms["quizForm"]["q6"].value;
	var q7 = document.forms["quizForm"]["q7"].value;
	var q8 = document.forms["quizForm"]["q8"].value;
	var q9 = document.forms["quizForm"]["q9"].value;
	var q10 = document.forms["quizForm"]["q10"].value;
	var q11 = document.forms["quizForm"]["q11"].value;
	var q12 = document.forms["quizForm"]["q12"].value;
	var q13 = document.forms["quizForm"]["q13"].value;
	var q14 = document.forms["quizForm"]["q14"].value;
	var q15 = document.forms["quizForm"]["q15"].value;
	
	// Validation
	var i=0;
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			alert('You missed question '+ i);
		
		}
	}
	
	// Set Correct Answers
	for(i=0;i< total;i++)
	{
		answers[i]='a';
	}
	
	// Check Answers
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == answers[i - 1]){
			score++;
		}
	}
	
	// Display Results
	var results = document.getElementById('results');
	if(score>=8)
	{
	results.innerHTML = 'You are in <span> '+score+'/'+total+'*100</span>% depression';
	alert('You are in '+score+'/'+total+'*100 depression');
}
else
{
results.innerHTML = ' You are in <span> '+score+'/'+total+'*100</span>% depression';
	alert('You are in <span> '+score+'/'+total+'*100</span>% depression');

}
	
	return false;
}