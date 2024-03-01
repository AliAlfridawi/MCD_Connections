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
const assign = document.getElementById("assign");
const shuf = document.getElementById("shuffle");

const clickedButtons = [];
const easyFour = [
    {
        name: "used in building fire", 
        one: "kindling",
        two: "log", 
        three: "match",
        four:"tinder"
    },
    {
      name: "party pooper", 
      one: "bore",
      two: "drag", 
      three: "drip",
      four:"dud"
  },
  {
    name: "musical sections", 
    one: "brass",
    two: "rhythm", 
    three: "string",
    four:"wind"
}
]
const mediumFour = [
    {
        name: "cheeses familiarly",
        one: "american",
        two: "blue",
        three: "jack",
        four: "swiss"
    },
    {
        name: "famous brothers",
        one: "jonas",
        two: "marx",
        three: "warner",
        four: "wright"
    },
    {
        name: "fast",
        one: "foward",
        two: "food",
        three: "forward",
        four: "friends"
    }
]
const hardFour = [
    {
        name: "hondas",
        one: "accord",
        two: "civic",
        three: "passport",
        four: "pilot"
    },
    {
        name: "kinds of heels",
        one: "cuban",
        two: "kitten",
        three: "stiletto",
        four: "wedge"
    },
    {
        name: "fasify",
        one: "fabricate",
        two: "fake",
        three: "fix",
        four: "forge"
    }
]
const harderFour = [
    {
        name: "Double ___",
        one: "date",
        two: "dutch",
        three: "jeopardy",
        four: "space"
    },
    {
        name: "video game characters",
        one: "crass",
        two: "link",
        three: "mario",
        four: "sonic"
    },
    {
        name: "tv shows",
        one: "fargo",
        two: "firefly",
        three: "fleabag",
        four: "flipper"
    }
]
// initialize buttons
assign.onclick = assignFun;
button1.onclick = selectThem;
button2.onclick = selectThem;
button3.onclick = selectThem;
button4.onclick = selectThem;
button5.onclick = selectThem;
button6.onclick = selectThem;
button7.onclick = selectThem;
button8.onclick = selectThem;
button9.onclick = selectThem;
button10.onclick = selectThem;
button11.onclick = selectThem;
button12.onclick = selectThem;
button13.onclick = selectThem;
button14.onclick = selectThem;
button15.onclick = selectThem;
button16.onclick = selectThem;
shuf.onclick = shuffleC;

function assignFun(){
    let selectedE4 = Math.floor(Math.random()* easyFour.length)
    button1.innerText = easyFour[selectedE4].one;
    button2.innerText = easyFour[selectedE4].two;
    button3.innerText = easyFour[selectedE4].three;
    button4.innerText = easyFour[selectedE4].four;
    selectedE4 = Math.floor(Math.random()* easyFour.length)
    button5.innerText = mediumFour[selectedE4].one;
    button6.innerText = mediumFour[selectedE4].two;
    button7.innerText = mediumFour[selectedE4].three;
    button8.innerText = mediumFour[selectedE4].four;
    selectedE4 = Math.floor(Math.random()* easyFour.length)
    button9.innerText = hardFour[selectedE4].one;
    button10.innerText = hardFour[selectedE4].two;
    button11.innerText = hardFour[selectedE4].three;
    button12.innerText = hardFour[selectedE4].four;
    selectedE4 = Math.floor(Math.random()* easyFour.length)
    button13.innerText = harderFour[selectedE4].one;
    button14.innerText = harderFour[selectedE4].two;
    button15.innerText = harderFour[selectedE4].three;
    button16.innerText = harderFour[selectedE4].four;
    array = [button1,button2,button3,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12,button13,button14,button15,button16];
    shuffleCards(array);
}
function shuffleCards(array){
    var i = 0;
    j=0;
    temp = null;
    for(i=array.length-1;i>0;i--)
    {
        j=Math.floor(Math.random()*(i+1));
        temp = array[i].innerText;
        array[i].innerText = array[j].innerText;
        array[j].innerText = temp; 
    }
}
function shuffleC(){
    array = [button1,button2,button3,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12,button13,button14,button15,button16];
    shuffleCards(array);
}
function selectThem(){

}


