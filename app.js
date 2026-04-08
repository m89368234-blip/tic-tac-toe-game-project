let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbox");
let winnerbtn=document.querySelector(".winner");
let newgamebtn=document.querySelector("#newgame");
let turnO=true;
const winpattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
console.log("box was Clicked");
if(turnO){
    box.innerText="O";
    turnO=false;
}else{
    box.innerText="X";
    turnO=true;
}
box.disabled=true;
checkwinner();
    })
})
const disableallboxes=()=>{
    boxes.forEach((box)=>
    {box.disabled=true;})
}
const showwinner=(winner)=>{
winnerbtn.innerText=`Congratulation! winner is ${winner}`;
winnerbtn.classList.remove("hide");
}
let checkwinner=()=>{
for(let pattern of winpattern){
let var1=boxes[pattern[0]].innerText;
let var2=boxes[pattern[1]].innerText;
let var3=boxes[pattern[2]].innerText;
if(var1!="" && var2!="" && var3!=""){
    if(var1===var2 && var2===var3){
        console.log("Winner",var1);
    showwinner(var1);}
    // disableallboxes();
}
}
} 
const resetgame=()=>{
turnO=true;
boxes.forEach((box)=>{box.innerText="";
box.disabled=false;})
winnerbtn.classList.add("hide");
};
resetbtn.addEventListener("click",resetgame);
newgamebtn.addEventListener("click",resetgame);