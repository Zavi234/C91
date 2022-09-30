P1_name= localStorage.getItem("player1_name");
P2_name= localStorage.getItem("player2_name");

P1_score=0
P2_score=0

document.getElementById("PN1_name").innerHTML= P1_name+ " : "
document.getElementById("PN2_name").innerHTML= P2_name+ " : "

document.getElementById("player1_score").innerHTML= P1_score
document.getElementById("player2_score").innerHTML= P2_score

document.getElementById("player_question").innerHTML= "Question Turn: "+P1_name
document.getElementById("player_answer").innerHTML= "Answer Turn: "+P2_name


function send() {
	get_word = document.getElementById("word").value;
	word = get_word.toLowerCase();
	console.log("word in lowerCase = " + word);

	charAt1 = word.charAt(1);
	console.log(charAt1);

	lenght_divide_2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenght_divide_2);
	
	console.log(charAt2);

    lenght_minus_1 = word.length - 1; 
    charAt3 = word.charAt(lenght_minus_1); 
	console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	console.log(remove_charAt3);




    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";

    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    
	check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("word").value = "";
}
Question_Turn="player1"
Answer_Turn="player2"

function check()
{
	var Save_Answer= document.getElementById("input_check_box").innerHTML;
	var Answer= Save_Answer.toLowerCase();

	if(Answer==word)
	{
		if(Answer_Turn=="player1")
		{
			console.log("Test")
			P1_score=P1_score+1
			document.getElementById("player1_score").innerHTML=P1_score;
		}
		else{
			P2_score=P2_score+1
			document.getElementById("player2_score").innerHTML=P2_score
		}
	}

if(Question_Turn=="player1"){
	Question_Turn="player2";
	document.getElementById("player_question").innerHTML="Question Turn: "+P2_name
}
else{
	Question_Turn="player1";
	document.getElementById("player_question").innerHTML="Question Turn: "+P1_name
}

if(Answer_Turn=="player1"){
	Answer_Turn="player2";
	document.getElementById("player_answer").innerHTML="Answer Turn: "+P2_name
}
else{
	Answer_Turn="player1";
	document.getElementById("player_answer").innerHTML="Answer Turn: "+P1_name
}
document.getElementById("output").innerHTML="";
}