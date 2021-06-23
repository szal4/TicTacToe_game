var box=document.getElementsByClassName("col");
var l1= document.getElementById("l1");
var l2= document.getElementById("l2");
var l3= document.getElementById("l3");
var l4= document.getElementById("l4");
var l5= document.getElementById("l5");
var l6= document.getElementById("l6");
var l7= document.getElementById("l7");
var l8= document.getElementById("l8");

box[0].addEventListener("click" , fxn1);
box[1].addEventListener("click" , fxn2);
box[2].addEventListener("click" , fxn3);
box[3].addEventListener("click" , fxn4);
box[4].addEventListener("click" , fxn5);
box[5].addEventListener("click" , fxn6);
box[6].addEventListener("click" , fxn7);
box[7].addEventListener("click" , fxn8);
box[8].addEventListener("click" , fxn9);

var grid=[[0,0,0],
          [0,0,0],
          [0,0,0]
];

function fxn1(){
    if(grid[0][0]!=0){
        return;
    }
    grid[0][0]=1;
    box[0].style.color= "red";
    check_win();
}
function fxn2(){
    if(grid[0][1]!=0){
        return;
    }
    grid[0][1]=1;
    box[1].style.color= "red";
    check_win()
}
function fxn3(){
    if(grid[0][2]!=0){
        return;
    }
    grid[0][2]=1;
    box[2].style.color= "red";
    check_win();
}
function fxn4(){
    if(grid[1][0]!=0){
        return;
    }
    grid[1][0]=1;
    box[3].style.color= "red";
    check_win();
}
function fxn5(){
    if(grid[1][1]!=0){
        return;
    }
    grid[1][1]=1;
    box[4].style.color= "red";
    check_win();
}
function fxn6(){
    if(grid[1][2]!=0){
        return;
    }
    grid[1][2]=1;
    box[5].style.color= "red";
    check_win();
}
function fxn7(){
    if(grid[2][0]!=0){
        return;
    }
    grid[2][0]=1;
    box[6].style.color= "red";
    check_win();
}
function fxn8(){
    if(grid[2][1]!=0){
        return;
    }
    grid[2][1]=1;
    box[7].style.color= "red";
    check_win();
}
function fxn9(){
    if(grid[2][2]!=0){
        return;
    }
    grid[2][2]=1;
    box[8].style.color= "red";
    check_win();
}
function check_win(){
    var info=document.getElementById("info");
    if(grid[0][0]==1 && grid[0][1]==1 && grid[0][2]==1){
        info.innerHTML="You win!!";
        l1.style.zIndex="1";
    }
   else if(grid[1][0]==1 && grid[1][1]==1 && grid[1][2]==1){
        info.innerHTML="You win!!";
         l2.style.zIndex="1";
    }
    else if(grid[2][0]==1 && grid[2][1]==1 && grid[2][2]==1){
        info.innerHTML="You win!!";
         l3.style.zIndex="1";
    }
    else if(grid[0][0]==1 && grid[1][0]==1 && grid[2][0]==1){
        info.innerHTML="You win!!";
         l4.style.zIndex="1";
    }
   else  if(grid[0][1]==1 && grid[1][1]==1 && grid[2][1]==1){
        info.innerHTML="You win!!";
         l5.style.zIndex="1";
    }
   else if(grid[0][2]==1 && grid[1][2]==1 && grid[2][2]==1){
        info.innerHTML="You win!!";
         l6.style.zIndex="1";
    }
    else if(grid[0][0]==1 && grid[1][1]==1 && grid[2][2]==1){
        info.innerHTML="You win!!";
         l7.style.zIndex="1";
    }
    else if(grid[0][2]==1 && grid[1][1]==1 && grid[2][0]==1){
        info.innerHTML="You win!!";
         l8.style.zIndex="1";
    }
    else{
        computer_move();
        computer_win_check();
    }
}
function computer_move(){
    if(grid[0][0]==0 && ((grid[0][1]==2 && grid[0][2]==2) || (grid[1][1]==2 && grid[2][2]==2) || (grid[1][0]==2 && grid[2][0]==2)) ){
        box[0].innerHTML="0";
        box[0].style.color="red";
        grid[0][0]=2;
    }
    else if(grid[0][1]==0 && ((grid[0][0]==2 && grid[0][2]==2) || (grid[1][1]==2 && grid[2][1]==2))){
        box[1].innerHTML="0";
        box[1].style.color="red";
        grid[0][1]=2;
    }
    else if(grid[0][2]==0 && ((grid[0][0]==2 && grid[0][1]==2) || (grid[1][2]==2 && grid[2][2]==2) || (grid[1][1]==2 && grid[2][0]==2)) ){
        box[2].innerHTML="0";
        box[2].style.color="red";
        grid[0][2]=2;
    }
    else if(grid[1][0]==0 && ((grid[0][0]==2 && grid[2][0]==2) || (grid[1][1]==2 && grid[1][2]==2))){
        box[3].innerHTML="0";
        box[3].style.color="red";
        grid[1][0]=2;
    }
    else if(grid[1][1]==0 && ((grid[0][0]==2 && grid[2][2]==2) || (grid[0][2]==2 && grid[2][0]==2) || (grid[1][0]==2 && grid[1][2]==2) || (grid[0][1]==2 && grid[2][1]==2)) ){
        box[4].innerHTML="0";
        box[4].style.color="red";
        grid[1][1]=2;
    }
    else if(grid[1][2]==0 && ((grid[1][0]==2 && grid[1][1]==2) || (grid[0][2]==2 && grid[2][2]==2))){
        box[5].innerHTML="0";
        box[5].style.color="red";
        grid[1][2]=2;
    }
    else if(grid[2][0]==0 && ((grid[0][0]==2 && grid[1][0]==2) || (grid[1][1]==2 && grid[0][2]==2) || (grid[2][1]==2 && grid[2][2]==2)) ){
        box[6].innerHTML="0";
        box[6].style.color="red";
        grid[2][0]=2;
    }
    else if(grid[2][1]==0 && ((grid[2][0]==2 && grid[2][2]==2) || (grid[1][1]==2 && grid[0][1]==2))){
        box[7].innerHTML="0";
        box[7].style.color="red";
        grid[2][1]=2;
    }
    else if(grid[2][2]==0 && ((grid[2][0]==2 && grid[2][1]==2) || (grid[0][2]==2 && grid[1][2]==2) || (grid[1][1]==2 && grid[0][0]==2)) ){
        box[8].innerHTML="0";
        box[8].style.color="red";
        grid[2][2]=2;
    }
    //stoping player to win
    else{
         if(grid[0][0]==0 && ((grid[0][1]==1 && grid[0][2]==1) || (grid[1][1]==1 && grid[2][2]==1) || (grid[1][0]==1 && grid[2][0]==1)) ){
        box[0].innerHTML="0";
        box[0].style.color="red";
        grid[0][0]=2;
    }
    else if(grid[0][1]==0 && ((grid[0][0]==1 && grid[0][2]==1) || (grid[1][1]==1 && grid[2][1]==1))){
        box[1].innerHTML="0";
        box[1].style.color="red";
        grid[0][1]=2;
    }
    else if(grid[0][2]==0 && ((grid[0][0]==1 && grid[0][1]==1) || (grid[1][2]==1 && grid[2][2]==1) || (grid[1][1]==1 && grid[2][0]==1)) ){
        box[2].innerHTML="0";
        box[2].style.color="red";
        grid[0][2]=2;
    }
    else if(grid[1][0]==0 && ((grid[0][0]==1 && grid[2][0]==1) || (grid[1][1]==1 && grid[1][2]==1))){
        box[3].innerHTML="0";
        box[3].style.color="red";
        grid[1][0]=2;
    }
    else if(grid[1][1]==0 && ((grid[0][0]==1 && grid[2][2]==1) || (grid[0][2]==1 && grid[2][0]==1) || (grid[1][0]==1 && grid[1][2]==1) || (grid[0][1]==1 && grid[2][1]==1)) ){
        box[4].innerHTML="0";
        box[4].style.color="red";
        grid[1][1]=2;
    }
    else if(grid[1][2]==0 && ((grid[1][0]==1 && grid[1][1]==1) || (grid[0][2]==1 && grid[2][2]==1))){
        box[5].innerHTML="0";
        box[5].style.color="red";
        grid[1][2]=2;
    }
    else if(grid[2][0]==0 && ((grid[0][0]==1 && grid[1][0]==1) || (grid[1][1]==1 && grid[0][2]==1) || (grid[2][1]==1 && grid[2][2]==1)) ){
        box[6].innerHTML="0";
        box[6].style.color="red";
        grid[2][0]=2;
    }
    else if(grid[2][1]==0 && ((grid[2][0]==1 && grid[2][2]==1) || (grid[1][1]==1 && grid[0][1]==1))){
        box[7].innerHTML="0";
        box[7].style.color="red";
        grid[2][1]=2;
    }
    else if(grid[2][2]==0 && ((grid[2][0]==1 && grid[2][1]==1) || (grid[0][2]==1 && grid[1][2]==1) || (grid[1][1]==1 && grid[0][0]==1)) ){
        box[8].innerHTML="0";
        box[8].style.color="red";
        grid[2][2]=2;
    }
    //random value 
    else{ 
        var ct=0
          for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(grid[i][j]==0){
                    ct++;
                }
            }
          }
        if(ct!=0){
        var rad=Math.floor((Math.random() * 10) + 1);
        rad=rad%ct;
         for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(grid[i][j]==0){
                    rad--;
                    if(rad<0){
                        grid[i][j]=2;
                        if(i==0 && j==0){
                           box[0].innerHTML="0";
                           box[0].style.color="red";
                        }
                        else if(i==0 && j==1){
                           box[1].innerHTML="0";
                           box[1].style.color="red";
                        }
                        else if(i==0 && j==2){
                           box[2].innerHTML="0";
                           box[2].style.color="red";
                        }
                        else if(i==1 && j==0){
                           box[3].innerHTML="0";
                           box[3].style.color="red";
                        }
                        else if(i==1 && j==1){
                           box[4].innerHTML="0";
                           box[4].style.color="red";
                        }
                        else if(i==1 && j==2){
                           box[5].innerHTML="0";
                           box[5].style.color="red";
                        }
                        else if(i==2 && j==0){
                           box[6].innerHTML="0";    
                           box[6].style.color="red";
                        }
                        else if(i==2 && j==1){
                           box[7].innerHTML="0";
                           box[7].style.color="red";
                        }
                        else{
                           box[8].innerHTML="0";
                           box[8].style.color="red";
                        }
                        break;
                    }
                }
            }
             if(rad<0)
                break;
        }//end if for loop for j

        } //ct!=0
    }//last else

    }
}

function computer_win_check(){
      var info=document.getElementById("info");
      var cwf=false;
    if(grid[0][0]==2 && grid[0][1]==2 && grid[0][2]==2){
        info.innerHTML="You lose!!";
        l1.style.zIndex="1";
        cwf=true;
    }
   else if(grid[1][0]==2 && grid[1][1]==2 && grid[1][2]==2){
        info.innerHTML="You lose!!";
         l2.style.zIndex="1";
         cwf=true;
    }
    else if(grid[2][0]==2 && grid[2][1]==2 && grid[2][2]==2){
        info.innerHTML="You lose!!";
         l3.style.zIndex="1";
         cwf=true;
    }
    else if(grid[0][0]==2 && grid[1][0]==2 && grid[2][0]==2){
        info.innerHTML="You lose!!";
         l4.style.zIndex="1";
         cwf=true;
    }
   else  if(grid[0][1]==2 && grid[1][1]==2 && grid[2][1]==2){
        info.innerHTML="You lose!!";
         l5.style.zIndex="1";
         cwf=true;
    }
   else if(grid[0][2]==2 && grid[1][2]==2 && grid[2][2]==2){
        info.innerHTML="You lose!!";
         l6.style.zIndex="1";
         cwf=true;
    }
    else if(grid[0][0]==2 && grid[1][1]==2 && grid[2][2]==2){
        info.innerHTML="You lose!!";
         l7.style.zIndex="1";
         cwf=true;
    }
    else if(grid[0][2]==2 && grid[1][1]==2 && grid[2][0]==2){
        info.innerHTML="You lose!!";
         l8.style.zIndex="1";
         cwf=true;
    }
    if(cwf){
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                grid[i][j]=-1;
            }
        }
    }
}
// reset button 
var btn= document.getElementById("btn");
btn.addEventListener("click",reset);
function reset(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            grid[i][j]=0;
        }
    }
    box[0].style.color= "rgba(2, 154, 255, 0.027)"; 
    box[1].style.color= "rgba(2, 154, 255, 0.027)"; 
    box[2].style.color= "rgba(2, 154, 255, 0.027)"; 
    box[3].style.color= "rgba(2, 154, 255, 0.027)"; 
    box[4].style.color= "rgba(2, 154, 255, 0.027)"; 
    box[5].style.color= "rgba(2, 154, 255, 0.027)"; 
    box[6].style.color= "rgba(2, 154, 255, 0.027)"; 
    box[7].style.color= "rgba(2, 154, 255, 0.027)"; 
    box[8].style.color= "rgba(2, 154, 255, 0.027)"; 

    box[0].innerHTML="X";
    box[1].innerHTML="X";
    box[2].innerHTML="X";
    box[3].innerHTML="X";
    box[4].innerHTML="X";
    box[5].innerHTML="X";
    box[6].innerHTML="X";
    box[7].innerHTML="X";
    box[8].innerHTML="X";

    l1.style.zIndex="-1";
    l2.style.zIndex="-1";
    l3.style.zIndex="-1";
    l4.style.zIndex="-1";
    l5.style.zIndex="-1";
    l6.style.zIndex="-1";
    l7.style.zIndex="-1";
    l8.style.zIndex="-1";

    document.getElementById("info").innerHTML = "Your chance is first and your sign is X";
}