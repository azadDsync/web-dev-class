let boxs=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let message=document.querySelector(".message");
let newGame=document.querySelector(".new-game");
let msg=document.querySelector("#msg");
let turnO=true;
let count=0;

//select all the div and each div can be located or accessed through node 

let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxs.forEach((box)=>{
    // console.log(box);
    box.addEventListener("click",()=>{
        // console.log(boxs);
        
        count++;
        if(count===9){
            draw();
        }
        if(turnO){
            box.style.color="black";
            box.innerText="O";
            turnO=false;
        }
        else{
            
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner(); 
    });
   
});
const draw=()=>{
    count=0;
    msg.innerText=`draw !`;
    message.classList.remove("hide");
}
const newGameButton=()=>{
    count=0;
    turnO=true;
    enableBox();
    message.classList.add("hide");
};
const disableBox=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
};
const enableBox=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    
    msg.innerText=`Congratulation ,Winner is ${winner}`;
        message.classList.remove("hide");

    
};
// let winPattern=[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ];
const checkWinner=()=>{
    for(let pattern of winPattern){
        
        let pval1= boxs[pattern[0]].innerText;
        let pval2= boxs[pattern[1]].innerText;
        let pval3= boxs[pattern[2]].innerText;
        // console.log(boxs[0]);
        
        if(pval1 !="" && pval2 != "" && pval3 !=""){
            if(pval1===pval2 && pval2 ===pval3){
                console.log("winner",pval1);
                showWinner(pval1);
                disableBox();
            }
        }
    }
};

newGame.addEventListener("click",newGameButton);
reset.addEventListener("click",newGameButton);