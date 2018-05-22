//setting up the actions 
let winsArr = []
let lossesArr = []
var startNum =[]
function getSum(acc, currentValue){
    return acc + currentValue
}
let randomTargetNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
let valueOfC1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
let valueOfC2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
let valueOfC3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
let valueOfC4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;



//This programs the start btn
$("#startBtn").on("click", function() {
    winsArr.splice(0,1,0)
    lossesArr.splice(0,1,0)
    document.getElementById("wins").innerHTML = winsArr ;
    document.getElementById("losses").innerHTML = lossesArr ;
    document.getElementById("randoNum").innerHTML = randomTargetNum ;
    document.getElementById("startNum").innerHTML = 0
   
})

//This programs the stop btn
$("#stopBtn").on("click", function(){
    winsArr.splice(0,1,0)
    lossesArr.splice(0,1,0)
    document.getElementById("wins").innerHTML = winsArr ;
    document.getElementById("losses").innerHTML = lossesArr ;
    document.getElementById("startNum").innerHTML = 0
    
})

//something is wrong with this for loop
//for (let x = 0 ; randomNum <= x ; x++) {
$("#crystalBtn1").on("click", function(){
    startNum.push(valueOfC1);
   //for some reason its pushing 12 to the array and not adding 12 to the number
   //startNum.append(newNum1)
  //return reducer
  let cats = startNum.reduce(getSum)
  console.log("pressing c1:" + startNum)
  document.getElementById("startNum").innerHTML = cats


})

$("#crystalBtn2").on("click", function(){
    startNum.push(valueOfC2);
   //for some reason its pushing 12 to the array and not adding 12 to the number
   //startNum.append(newNum1)
  //return reducer
  let cats = startNum.reduce(getSum)
  console.log("pressing c2:" + startNum)
  document.getElementById("startNum").innerHTML = cats


})

$("#crystalBtn3").on("click", function(){
    startNum.push(valueOfC3);
   //for some reason its pushing 12 to the array and not adding 12 to the number
   //startNum.append(newNum1)
  //return reducer
  let cats = startNum.reduce(getSum)
  console.log("pressing c2:" + startNum)
  document.getElementById("startNum").innerHTML = cats


})

$("#crystalBtn4").on("click", function(){
    startNum.push(valueOfC4);
   //for some reason its pushing 12 to the array and not adding 12 to the number
   //startNum.append(newNum1)
  //return reducer
  let cats = startNum.reduce(getSum)
  console.log("pressing c2:" + startNum)
  document.getElementById("startNum").innerHTML = cats


})
