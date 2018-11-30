import { initialState } from '../initialState';
import { RESET, PRESS_UP, PRESS_DOWN, PRESS_LEFT, PRESS_RIGHT } from '../actionTypes';
import { findMaxVal, rotateRight, rotateLeft } from '../util';

let score = 0;

function init(size = 4) {
	const repeat = (fn, n) => Array(n).fill(0).map(fn);
	const fill = () => 0;
	const customMatrix = n => repeat(() => repeat(fill, n), n);
	return randomTile(randomTile(customMatrix(size)));
}

function initScore() {
	score = 0;
}

function getEmptySpaces(matrix) {
	const emptySpaces = [];
	for (let rows = 0; rows < matrix.length; rows++) {
		for (let cols = 0; cols < matrix[rows].length; cols++) {
			if (matrix[rows][cols] === 0) {
				emptySpaces.push([rows, cols]);
			}
		}
	}
	return emptySpaces;
}

function randomTileNumber() {
	const numbers = [2, 4];
	const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
	return randomNumber;
}

function randomTile(matrix) {
	const emptySpaces = getEmptySpaces(matrix);
	const randomCell = emptySpaces[Math.floor(Math.random() * emptySpaces.length)];
	const randomNumber = randomTileNumber();
	if (randomCell !== undefined) {
		matrix[randomCell[0]][randomCell[1]] = randomNumber;
		return matrix;
	}
	alert('Game Over, Noob!');
	initScore();
	return init();
}

function moveUp(inputBoard) {
	let rotatedRight = rotateRight(inputBoard);
	let matrix = [];

	for (let rows = 0; rows < rotatedRight.length; rows++) {
		let row = [];
		for (let cols = 0; cols < rotatedRight[rows].length; cols++) {
			let current = rotatedRight[rows][cols];
			(current === 0) ? row.unshift(current): row.push(current);
		}
		matrix.push(row);
	}

	for (let rows = 0; rows < matrix.length; rows++) {
		for (let cols = matrix[rows].length - 1; cols >= 0; cols--) {
			if (matrix[rows][cols] > 0 && matrix[rows][cols] === matrix[rows][cols - 1]) {
				matrix[rows][cols] = matrix[rows][cols] * 2;
				matrix[rows][cols - 1] = 0;
				score += matrix[rows][cols];
			} else if (matrix[rows][cols] === 0 && matrix[rows][cols - 1] > 0) {
				matrix[rows][cols] = matrix[rows][cols - 1];
				matrix[rows][cols - 1] = 0;
			}
		}
	}

	matrix = rotateLeft(matrix);
	return matrix;
}

function moveRight(inputMatrix) {
	let matrix = [];
	for (let rows = 0; rows < inputMatrix.length; rows++) {
		let row = [];
		for (let cols = 0; cols < inputMatrix[rows].length; cols++) {
			let current = inputMatrix[rows][cols];
			(current === 0) ? row.unshift(current): row.push(current);
		}
		matrix.push(row);
	}

	for (let rows = 0; rows < matrix.length; rows++) {
		for (let cols = matrix[rows].length - 1; cols >= 0; cols--) {
			if (matrix[rows][cols] > 0 && matrix[rows][cols] === matrix[rows][cols - 1]) {
				matrix[rows][cols] = matrix[rows][cols] * 2;
				matrix[rows][cols - 1] = 0;
				score += matrix[rows][cols];
			} else if (matrix[rows][cols] === 0 && matrix[rows][cols - 1] > 0) {
				matrix[rows][cols] = matrix[rows][cols - 1];
				matrix[rows][cols - 1] = 0;
			}
		}
	}
	return matrix;
}

function moveDown(inputMatrix) {
	let rotatedRight = rotateRight(inputMatrix);
	let matrix = [];

	for (let rows = 0; rows < rotatedRight.length; rows++) {
		let row = [];
		for (let cols = rotatedRight[rows].length - 1; cols >= 0; cols--) {
			let current = rotatedRight[rows][cols];
			(current === 0) ? row.push(current): row.unshift(current);
		}
		matrix.push(row);
	}

	for (let rows = 0; rows < matrix.length; rows++) {
		for (let cols = 0; cols < matrix.length; cols++) {
			if (matrix[rows][cols] > 0 && matrix[rows][cols] === matrix[rows][cols + 1]) {
				matrix[rows][cols] = matrix[rows][cols] * 2;
				matrix[rows][cols + 1] = 0;
				score += matrix[rows][cols];
			} else if (matrix[rows][cols] === 0 && matrix[rows][cols + 1] > 0) {
				matrix[rows][cols] = matrix[rows][cols + 1];
				matrix[rows][cols + 1] = 0;
			}
		}
	}

	matrix = rotateLeft(matrix);
	return matrix;
}

function moveLeft(inputMatrix) {
	const matrix = [];
	for (let rows = 0; rows < inputMatrix.length; rows++) {
		let row = [];
		for (let cols = inputMatrix[rows].length - 1; cols >= 0; cols--) {
			let current = inputMatrix[rows][cols];
			(current === 0) ? row.push(current): row.unshift(current);
		}
		matrix.push(row);
	}

	for (let rows = 0; rows < matrix.length; rows++) {
		for (let cols = 0; cols < matrix.length; cols++) {
			if (matrix[rows][cols] > 0 && matrix[rows][cols] === matrix[rows][cols + 1]) {
				matrix[rows][cols] = matrix[rows][cols] * 2;
				matrix[rows][cols + 1] = 0;
				score += matrix[rows][cols];
			} else if (matrix[rows][cols] === 0 && matrix[rows][cols + 1] > 0) {
				matrix[rows][cols] = matrix[rows][cols + 1];
				matrix[rows][cols + 1] = 0;
			}
		}
	}
	
	return matrix;
}

function checkIfWinner(matrix) {
	return ((findMaxVal(matrix) >= 2048) ? true : false);
}

function triggerUp(boardMatrix) {
	checkIfWinner(boardMatrix);
	return randomTile(moveUp(boardMatrix));
}

function triggerRight(boardMatrix) {
	checkIfWinner(boardMatrix);
	return randomTile(moveRight(boardMatrix));
}

function triggerDown(boardMatrix) {
	checkIfWinner(boardMatrix);
	return randomTile(moveDown(boardMatrix));
}

function triggerLeft(boardMatrix) {
	checkIfWinner(boardMatrix);
	return randomTile(moveLeft(boardMatrix));
}


function matrix(state = initialState, action) {
	switch (action.type) {
		case PRESS_UP:
			return {
				isWinner: checkIfWinner(state.boardMatrix),
				boardMatrix: triggerUp(state.boardMatrix),
				score: score
			};
		case PRESS_RIGHT:
			return {
				isWinner: checkIfWinner(state.boardMatrix),
				boardMatrix: triggerRight(state.boardMatrix),
				score: score
			};
		case PRESS_DOWN:
			return {
				isWinner: checkIfWinner(state.boardMatrix),
				boardMatrix: triggerDown(state.boardMatrix),
				score: score
			};
		case PRESS_LEFT:
			return {
				isWinner: checkIfWinner(state.boardMatrix),
				boardMatrix: triggerLeft(state.boardMatrix),
				score: score
			};
		case RESET:
			initScore();
			return {
				boardMatrix: init(),
				score: 0,
			}
		default:
			return {
				boardMatrix: init(),
				score: state.score
			}
	}
}

export default matrix;