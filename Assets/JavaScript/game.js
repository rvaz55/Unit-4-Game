//setting up the actions 
let winsArr = []
let lossesArr = []
var startNum =[]
let intialVal = 0
function getSum(acc, currentValue){
    return acc + currentValue
}
function newTargetNum(){
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19
}
let randomTargetNum = 0 ;
//let randomTargetNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
let C1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
let C2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
let C3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
let C4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;



//This programs the start btn
$("#startBtn").on("click", function() {
    winsArr.splice(0,1,0)
    lossesArr.splice(0,1,0)
    startNum.length = 0
    document.getElementById("wins").innerHTML = winsArr ;
    document.getElementById("losses").innerHTML = lossesArr ;
    document.getElementById("randoNum").innerHTML = newTargetNum() ;
    document.getElementById("startNum").innerHTML = 0
})

//This programs the stop btn
$("#resetBtn").on("click", function(){
    startNum.length = 0 
    document.getElementById("randoNum").innerHTML = newTargetNum();
    document.getElementById("startNum").innerHTML = 0 ;
    C1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1 ;
    C2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1 ;
    C3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1 ;
    C4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1 ;
   
})


//something is wrong with this for loop
//for (let x = 0 ; randomNum <= x ; x++) {
$("#crystalBtn1").on("click", function(){
   startNum.push(C1);
   //for some reason its pushing 12 to the array and not adding 12 to the number
   //startNum.append(newNum1)
  //return reducer
  let cats = startNum.reduce(getSum)
  console.log("pressing c1:" + startNum)
  document.getElementById("startNum").innerHTML = cats


})

$("#crystalBtn2").on("click", function(){
    startNum.push(C2);
   //for some reason its pushing 12 to the array and not adding 12 to the number
   //startNum.append(newNum1)
  //return reducer
  let cats = startNum.reduce(getSum)
  console.log("pressing c2:" + startNum)
  document.getElementById("startNum").innerHTML = cats


})

$("#crystalBtn3").on("click", function(){
    startNum.push(C3);
   //for some reason its pushing 12 to the array and not adding 12 to the number
   //startNum.append(newNum1)
  //return reducer
  let cats = startNum.reduce(getSum)
  console.log("pressing c3:" + startNum)
  document.getElementById("startNum").innerHTML = cats


})

$("#crystalBtn4").on("click", function(){
    startNum.push(C4);
   //for some reason its pushing 12 to the array and not adding 12 to the number
   //startNum.append(newNum1)
  //return reducer
  let cats = startNum.reduce(getSum);
  console.log("pressing c4:" + startNum);
  document.getElementById("startNum").innerHTML = cats


})


if (startNum === randomTargetNum) {
    winsArr++
    console.log("win!!")
} /*else {
    lossesArr++
    console.log("try again!")
}*/