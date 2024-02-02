let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
  };



boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        console.log("Button Was Clicked");
        if (turn0) {
            box.innerText ="O";
            turn0 = false;
        } else {
            box.innerText ="X";
            turn0 = true;
        }
        box.disabled = true;

        checkwinner()
    });
});
const disabledBox = ()=>{
    for (const box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
const showWinner= (Winner)=>{
        msg.innerText = `Congratulations , Winner is ${Winner}`
        msgContainer.classList.remove("hide");
        disabledBox();
    }

const checkwinner = ()=>{
    for (pattern of winPatterns) {
        // console.log(,boxes[pattern[1]].innerText,boxes[pattern [2]].innerText);
        let posVal1 = boxes[pattern [0]].innerText;
        let posVal2 = boxes[pattern [1]].innerText;
        let posVal3 = boxes[pattern [2]].innerText;

        if (posVal1 != "" && posVal2 !="" && posVal3 != "") {
                if (posVal1 == posVal2 && posVal2 == posVal3) {
                    console.log("Winner" , posVal1);
                    // box.disabled = true;
                    showWinner(posVal1);
                }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
