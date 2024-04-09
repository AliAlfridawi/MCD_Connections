const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button10 = document.getElementById("button10");
const button11 = document.getElementById("button11");
const button12 = document.getElementById("button12");
const button13 = document.getElementById("button13");
const button14 = document.getElementById("button14");
const button15 = document.getElementById("button15");
const button16 = document.getElementById("button16");
const shuffle = document.getElementById("shuffle");
const di = document.getElementById("deselect");
const ch = document.getElementById("check");
const life1 = document.getElementById("life1")
const life2 = document.getElementById("life2")
const life3 = document.getElementById("life3")
const life4 = document.getElementById("life4")
let lifeCount = 4;
var selectFour = [];

shuffle.onclick = sush 
button1.onclick=selectCard
button2.onclick=selectCard
button3.onclick=selectCard
button4.onclick=selectCard
button5.onclick=selectCard
button6.onclick=selectCard
button7.onclick=selectCard
button8.onclick=selectCard
button9.onclick=selectCard
button10.onclick=selectCard
button11.onclick=selectCard
button12.onclick=selectCard
button13.onclick=selectCard
button14.onclick=selectCard
button15.onclick=selectCard
button16.onclick=selectCard
di.onclick=diselect
ch.onclick=checkThem



function sush(){
    const myArray = [button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12,button13,button14,button15,button16];
    for(let i = myArray.length -1; i>0;i--)
    {
        const random = Math.floor(Math.random()*(i+1));
        [myArray[i].innerHTML,myArray[random].innerHTML] = [myArray[random].innerHTML,myArray[i].innerHTML];
    }
    diselect()
}

function selectCard(){
    if(selectFour.length<4 && !(this.innerHTML=="DONE") && !selectFour.includes(this.innerHTML))
    {
        selectFour.push(this.innerHTML);
        this.style.backgroundColor = "#ffffff";
        this.style.color = "#000000"
    }
    else
    {
        console.log("Too much connections");
        console.log(selectFour);
    }
}

function diselect(){
    button1.style.backgroundColor="#000000";
    button1.style.color="#ffffff";
    button2.style.backgroundColor="#000000";
    button2.style.color="#ffffff";
    button3.style.backgroundColor="#000000";
    button3.style.color="#ffffff";
    button4.style.backgroundColor="#000000";
    button4.style.color="#ffffff";
    button5.style.backgroundColor="#000000";
    button5.style.color="#ffffff";
    button6.style.backgroundColor="#000000";
    button6.style.color="#ffffff";
    button7.style.backgroundColor="#000000";
    button7.style.color="#ffffff";
    button8.style.backgroundColor="#000000";
    button8.style.color="#ffffff";
    button9.style.backgroundColor="#000000";
    button9.style.color="#ffffff";
    button10.style.backgroundColor="#000000";
    button10.style.color="#ffffff";
    button11.style.backgroundColor="#000000";
    button11.style.color="#ffffff";
    button12.style.backgroundColor="#000000";
    button12.style.color="#ffffff";
    button13.style.backgroundColor="#000000";
    button13.style.color="#ffffff";
    button14.style.backgroundColor="#000000";
    button14.style.color="#ffffff";
    button15.style.backgroundColor="#000000";
    button15.style.color="#ffffff";;
    button16.style.backgroundColor="#000000";
    button16.style.color="#ffffff";
    selectFour=[];
}

function checkThem()
{
    let myArray= [button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12,button13,button14,button15,button16];
    if(selectFour.length<4){
        window.alert("Select something/more");
    }
    else if(selectFour.includes("Link") && selectFour.includes("Sonic") && selectFour.includes("Mario") && selectFour.includes("Crash"))
    {
        window.alert("Video Game Characters")
        for(let i = 0; i<myArray.length; i++)
        {
            
            myArray[i].style.backgroundColor="#000000";
            myArray[i].style.color="#ffffff";
            if(myArray[i].innerHTML == "Link" || myArray[i].innerHTML == "Sonic" || myArray[i].innerHTML == "Mario" || myArray[i].innerHTML == "Crash")
            {
                myArray[i].innerHTML="DONE";
            }
        }
    }
    else if(selectFour.includes("Pilot") && selectFour.includes("Civic") && selectFour.includes("Acord") && selectFour.includes("Passport"))
    {
        window.alert("Hondas")
        for(let i = 0; i<myArray.length; i++)
        {
            myArray[i].style.backgroundColor="#000000";
            myArray[i].style.color="#ffffff";
            if(myArray[i].innerHTML == "Pilot" || myArray[i].innerHTML == "Civic" || myArray[i].innerHTML == "Acord" || myArray[i].innerHTML == "Passport")
            {
                myArray[i].innerHTML="DONE";
            }
        }
    }
    else if(selectFour.includes("Wright") && selectFour.includes("Murphy") && selectFour.includes("Jonas") && selectFour.includes("Marx"))
    {
        window.alert("Famous Brothers")
        for(let i = 0; i<myArray.length; i++)
        {
            myArray[i].style.backgroundColor="#000000";
            myArray[i].style.color="#ffffff";
            if(myArray[i].innerHTML == "Wright" || myArray[i].innerHTML == "Murphy" || myArray[i].innerHTML == "Jonas" || myArray[i].innerHTML == "Marx")
            {
                myArray[i].innerHTML="DONE";
            }
        }
    }
    else if(selectFour.includes("Trundle") && selectFour.includes("Canopy") && selectFour.includes("Warner") && selectFour.includes("Bunk"))
    {
        window.alert("Beds")
        for(let i = 0; i<myArray.length; i++)
        {
            myArray[i].style.backgroundColor="#000000";
            myArray[i].style.color="#ffffff";
            if(myArray[i].innerHTML == "Trundle" || myArray[i].innerHTML == "Canopy" || myArray[i].innerHTML == "Warner" || myArray[i].innerHTML == "Bunk")
            {
                myArray[i].innerHTML="DONE";
            }
        }
    }
    else{
        if(lifeCount==4)
        {
        document.getElementById("life1").setAttribute("hidden","hidden");
        lifeCount=lifeCount-1;
        }
        else if(lifeCount==3)
        {
        document.getElementById("life2").setAttribute("hidden","hidden");
        lifeCount=lifeCount-1;
        }
        else if(lifeCount==2)
        {
        document.getElementById("life3").setAttribute("hidden","hidden");
        lifeCount=lifeCount-1;
        }
        else if(lifeCount==1)
        {
        document.getElementById("life4").setAttribute("hidden","hidden");
        lifeCount=lifeCount-1;
        window.alert("YOU LOSE")
        }
    }
    selectFour=[];
}