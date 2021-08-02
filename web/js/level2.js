let backgroundSound = document.createElement('audio');
backgroundSound.src='/web/audio/music.mp3';
backgroundSound.play();
autoplay();
function autoplay(){
    backgroundSound.loop='loop';
}
player1=false;
player2=false;
let playername1='';
let playername2=''
function playerName(x){
    if(document.getElementById(x).value){
        if(x==='Player1'){player1=true; playername1=document.getElementById(x).value;}
        else{player2=true;playername2=document.getElementById(x).value;}
        document.getElementById(x).disabled=true;
    }
}
previousBlock=0;
function HoverEffect(x){
document.getElementById(x).style.background='darkolivegreen';
if(previousBlock!=0){
    document.getElementById(previousBlock).style.background='burlywood';
}
previousBlock=x;
}
let GI='GInfo';
let p1=0;
let p2=1;
let p1block='❌';
let p2block='✔️';
let block='❌';
var clickvar ='';
function ClickDone(x){
if(player1==false){soundEffect('errorSound');document.getElementById(GI).value='Player1 type your name'; document.getElementById(GI).className='btn btn-warning';document.getElementById('Player1').className='btn btn-outline-danger';}
else if(player2==false){soundEffect('errorSound');document.getElementById('Player1').className="btn btn-light";document.getElementById(GI).value='Player2 type your name';document.getElementById(GI).className='btn btn-warning';document.getElementById('Player2').className='btn btn-outline-danger';}
else{
    document.getElementById('Player1').className="btn btn-light";
    document.getElementById('Player2').className="btn btn-light";
    document.getElementById(GI).className='btn btn-outline-success';
    document.getElementById(GI).value='GAME BEGAINs';
    
if(document.getElementById(x).innerHTML.length=='0'){
    soundEffect('clickSound');
    document.getElementById(101).click();
    clickvar = x;

    if(p1%2==0){p1=p1+1; p2=p2-1;block=p1block;document.getElementById(GI).value=playername2+" turns";}
    else{block=p2block;p1=p1-1; p2=p2+1;document.getElementById(GI).value=playername1+" turns";}
}
else{soundEffect('errorSound');document.getElementById(GI).value='other player already used this block';document.getElementById(GI).className='btn btn-warning';}
}
}

function wincheck(){
    let b1=document.getElementById('1').innerHTML;
    let b2=document.getElementById('2').innerHTML;
    let b3=document.getElementById('3').innerHTML;
    let b4=document.getElementById('4').innerHTML;
    let b5=document.getElementById('5').innerHTML;
    let b6=document.getElementById('6').innerHTML;
    let b7=document.getElementById('7').innerHTML;
    let b8=document.getElementById('8').innerHTML;
    let b9=document.getElementById('9').innerHTML;
    if(b1==p1block && b2==p1block && b3==p1block){won('Player1');}
    else if(b4==p1block && b5==p1block && b6==p1block){won('Player1');}
    else if(b7==p1block && b8==p1block && b9==p1block){won('Player1');}
    else if(b1==p1block && b4==p1block && b7==p1block){won('Player1');}
    else if(b2==p1block && b5==p1block && b8==p1block){won('Player1');}
    else if(b3==p1block && b6==p1block && b9==p1block){won('Player1');}
    else if(b1==p1block && b5==p1block && b9==p1block){won('Player1');}
    else if(b3==p1block && b5==p1block && b7==p1block){won('Player1');}

    else if(b1==p2block && b2==p2block && b3==p2block){won('Player2');}
    else if(b4==p2block && b5==p2block && b6==p2block){won('Player2');}
    else if(b7==p2block && b8==p2block && b9==p2block){won('Player2');}
    else if(b1==p2block && b4==p2block && b7==p2block){won('Player2');}
    else if(b2==p2block && b5==p2block && b8==p2block){won('Player2');}
    else if(b3==p2block && b6==p2block && b9==p2block){won('Player2');}
    else if(b1==p2block && b5==p2block && b9==p2block){won('Player2');}
    else if(b3==p2block && b5==p2block && b7==p2block){won('Player2');}

    else if(b1.length!==0&&b2.length!==0&&b3.length!==0&&b4.length!==0&&b5.length!==0&&b6.length!==0&&b7.length!==0&&b8.length!==0&&b9.length!==0){won('tie');}
    
}
let score1=0;
let score2=0;
function won(Player){
    document.getElementById('1').innerHTML='';
    document.getElementById('2').innerHTML='';
    document.getElementById('3').innerHTML='';
    document.getElementById('4').innerHTML='';
    document.getElementById('5').innerHTML='';
    document.getElementById('6').innerHTML='';
    document.getElementById('7').innerHTML='';
    document.getElementById('8').innerHTML='';
    document.getElementById('9').innerHTML='';
    if(Player!=='tie'){
        soundEffect('winSound');
    document.getElementById(GI).value=document.getElementById(Player).value+" WIN !!!";
    document.getElementById(Player).className='btn btn-info';
    document.getElementById(GI).className='btn btn-outline-light';
    let score=0;
    let playername='';
    if(Player=='Player1'){score1=score1+1; score=score1; playername=playername1;}
    else{score2=score2+1;score=score2;playername=playername2;}
    document.getElementById(Player).value=playername+" score is : "+score;
    alert(playername+" WON THE GAME ");
    alert("GAME RESTARTED");
    
    }
    else{
        alert("GAME IS TIE ");
    alert("GAME RESTARTED");
        document.getElementById(GI).value='BOTH HAVE TIE';
    }
}

let prevS1='';
let prevS2='';
function Sign(x,y){
    let b1=document.getElementById('1').innerHTML;
    let b2=document.getElementById('2').innerHTML;
    let b3=document.getElementById('3').innerHTML;
    let b4=document.getElementById('4').innerHTML;
    let b5=document.getElementById('5').innerHTML;
    let b6=document.getElementById('6').innerHTML;
    let b7=document.getElementById('7').innerHTML;
    let b8=document.getElementById('8').innerHTML;
    let b9=document.getElementById('9').innerHTML;
    if(b1==''&& b2==''&& b3==''&& b4==''&& b5==''&& b6==''&& b7==''&& b8==''&& b9==''){
    document.getElementById(x).className='dropdown-item active';
    document.getElementById(y).innerHTML=document.getElementById(x).innerHTML;
    if(y=='sign1'){
    if(prevS1!=''){document.getElementById(prevS1).className='dropdown-item';}
    prevS1=x;
    p1block=document.getElementById(x).innerHTML;
}
    else{
        if(prevS2!=''){document.getElementById(prevS2).className='dropdown-item';}
        prevS2=x;
        p2block=document.getElementById(x).innerHTML;
    }
}
else{
    document.getElementById(GI).value='You are in mid game no sign change';
    document.getElementById(GI).className='btn btn-warning';
}
}
let winSound = document.createElement('audio');
winSound.src='/web/audio/win.mp3';
let errorSound = document.createElement('audio');
errorSound.src='/web/audio/error.mp3';
let clickSound = document.createElement('audio');
clickSound.src = '/web/audio/click.mp3';
function soundEffect(soundName){
    if(soundName==='winSound'){winSound.play();}
    else if(soundName==='clickSound'){clickSound.play();}
    else if(soundName==='errorSound'){errorSound.play();}
}

function wins(){
    console.log(clickvar);
    document.getElementById(clickvar).innerHTML=block;
    wincheck();
}
function clickfn(name){
    let array = ['stone','paper','scissor'];
    var x = Math.floor((Math.random() * 3) + 1);

    if(name=='stone'){
        if(array[x-1]=='stone'){console.log('tie')}
        else if(array[x-1]=='paper'){console.log('nop')}
        else if(array[x-1]=='scissor'){console.log('WIN!!'); wins();}
    }
    if(name=='paper'){
        if(array[x-1]=='stone'){console.log('WIN!!'); wins();}
        else if(array[x-1]=='paper'){console.log('tie')}
        else if(array[x-1]=='scissor'){console.log('nop')}
    }
    if(name=='scissor'){
        if(array[x-1]=='stone'){console.log('nop')}
        else if(array[x-1]=='paper'){console.log('WIN!!'); wins();}
        else if(array[x-1]=='scissor'){console.log('tie')}
    }

    document.getElementById(101).click();
}