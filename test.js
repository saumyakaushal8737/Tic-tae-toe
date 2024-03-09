let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGamebutton = document.querySelector(".newbtn"); // Corrected typo in 'querySelector'
let msg = document.querySelector(".wow"); // Added '.' before 'wow' to indicate it's a class
let winnerMember = document.querySelector(".win-member"); // Added '.' before 'win-member' to indicate it's a class
let turn0 = false;
const winners = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

const resetGame = () =>
{
   turn0 = false;
   enableButtons();
   winnerMember.classList.add("hide");
};
boxes.forEach((box) => {
   box.addEventListener("click", () => {
      if (turn0 === false) {
        box.innerText = "x";
        turn0 = true;
      } else {
        box.innerText = "o";
        turn0 = false;
      }
      box.disabled = true;
      checkWinner();
   });
 });

const checkWinner = () => {
    for (let i of winners) {
      let pos1val = boxes[i[0]].innerText;
      let pos2val = boxes[i[1]].innerText;
      let pos3val = boxes[i[2]].innerText;
      if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
        if (pos1val == pos2val && pos2val == pos3val) {
          showWinner(pos1val);
        }
      }
    }
};

const showWinner = (winnerName) => {
    msg.innerText = `Congratulations ${winnerName} is the winner !!!!`; 
    winnerMember.classList.remove("hide");
    disableButtons();
};

const disableButtons = () =>
{
    for(let box of boxes)
    {
      box.disabled = true;
    }
};

const enableButtons = () =>
{
    for(let box of boxes)
    {
      box.disabled = false;
      box.innerText = "";
    }
};
newGamebutton.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);