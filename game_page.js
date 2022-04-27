player1_name=localStorage.getItem("player1_name")
player2_name=localStorage.getItem("player2_name")
player1_score=0
player2_score=0
document.getElementById("player1_name").innerHTML=player1_name+" : "
document.getElementById("player2_name").innerHTML=player2_name+" : "
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_question").innerHTML="questionturn - "+player1_name
document.getElementById("player_answer").innerHTML="answerturn - "+player2_name
function send(){
    get_num1=document.getElementById("n1").value
    get_num2=document.getElementById("n2").value
    qw="<h4 id='word_display'> Q."+get_num1+" X "+get_num2+" </h4>"
    ib="<br> answer: <input type='text' id='input_check_box'>"
    cb="<br> <br> <button class='btn btn-info' onclick='check()'>check</button>"
    ro=qw+ib+cb
    document.getElementById("output").innerHTML=ro
    document.getElementById("n1").value=""
    document.getElementById("n2").value=""
}