let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbutn");
let msg = document.querySelector(".winmasg");
let newbtn = document.querySelector(".newbutn");
let msgp = document.querySelector(".msgg");

let turnO = true;

const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const reset = () => {
  turnO = true;
  enbbtn();
  msg.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Cloicked");
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const disbtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enbbtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};




const showwinner = (winner) => {
  msgp.innerText = ` Congrats to Wnner  ${winner} `;
  msg.classList.remove("hide");
  disbtn();
};

const checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showwinner(pos1val);
      }
      
    }
  }
};

newbtn.addEventListener("click", reset);
resetbtn.addEventListener("click", reset);
