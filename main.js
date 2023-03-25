
const boxes = document.querySelectorAll(".box");

let arr = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function checkWinner(board) {
	let isWinner = false;
	let isFinished = board.filter((item) => item).length === 9;
	for (let [a, b, c] of arr) {
		const first = board[a] || NaN;
		const second = board[b] || NaN;
		const third = board[c] || NaN;

		if (first === second && second === third) {
			isWinner = true;
			break;
		}
	}

	return [isWinner, isFinished];
}

function init() {
	boxes.forEach((box) => {
		let player = "X";
		let board = [];
		const cells = document.querySelectorAll(".cell");
		const win = document.querySelector(".winner");
        const nextPlayerAndWinner = document.querySelector(".nextPlayer")

		cells.forEach((cell, idx) => {
			cell.addEventListener("click", () => {
                
				if (cell.innerText === "") {
					board[idx] = player;
					cell.innerText = player;
                    
                    buttons.appendChild(btn);
					const [isWinner, isFinished] = checkWinner(board); 

					if (isWinner) {
                        nextPlayerAndWinner.innerText = `Winner: ${win.innerText = player}`;
						cells.forEach((cell) => (cell.style.pointerEvents = "none"));
					}
					if (isFinished) nextPlayerAndWinner.innerText = "Scratch: Cat's game";
					player = player === "X" ? "O" : "X";
                    win.innerText = player;
				}
			});
		});
	});
}

init();

const btn = document.querySelector("#mover_btn");
const buttons = document.querySelector(".move-buttons");
