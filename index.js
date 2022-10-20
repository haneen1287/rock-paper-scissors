const pics=["rock.png","paper.png","scissors.png"]

let p1=document.getElementById("pic1")
let p2=document.getElementById("pic2")

let x,y
let resultDisplay=document.getElementById("winner")

document.getElementById("rock").addEventListener("click",function()
{

    x=0
    p1.innerHTML=`<img src=${pics[0]} class="images">`
     y=Math.floor(Math.random()*3)
    p2.innerHTML=`<img src=${pics[y]} class="images">`
    getResult()
})


document.getElementById("paper").addEventListener("click",function()
{
    x=1
    p1.innerHTML=`<img src=${pics[1]} class="images">`
     y=Math.floor(Math.random()*3)
    p2.innerHTML=`<img src=${pics[y]} class="images">`
    getResult()
})


document.getElementById("scissors").addEventListener("click",function()
{
    x=2
    p1.innerHTML=`<img src=${pics[2]} class="images">`
     y=Math.floor(Math.random()*3)
    p2.innerHTML=`<img src=${pics[y]} class="images">`
    getResult()
})

function getResult()
{
    if (x === y) {
        result = 'its a draw!'
      }
      if (x === 0 && y=== 1) {
        result = 'you lose!'
      }
      if (x === 0 && y === 2) {
        result = 'you win!'
      }
      if (x === 1 && y === 2) {
        result = 'you lose!'
      }
      if (x === 1 && y === 0) {
        result = 'you win!'
      }
      if (x === 2 && y === 0) {
        result = 'you lose!'
      }
      if (x === 2 && y === 1) {
        result = 'you win!'
      }
      resultDisplay.innerHTML = result
}