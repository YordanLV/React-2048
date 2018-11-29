import { initialState } from '../initialState';
import { INIT, RESET, PRESS_UP, PRESS_DOWN, PRESS_LEFT, PRESS_RIGHT } from '../actionTypes';
import { findMaxVal, rotateRight, rotateLeft, shiftRigh } from '../util';

function init(matrix){
	return randomTile(randomTile(matrix));
}
function reset(matrix) {
	matrix = [
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0]]
	return randomTile(randomTile(matrix));
}

// Get all blank coordinates from matrix
function getEmptySpaces(matrix) {
	const emptySpaces = [];
	for (let r = 0; r < matrix.length; r++) {
		for (let c = 0; c < matrix[r].length; c++) {
			if (matrix[r][c] === 0) { emptySpaces.push([r, c]);
			 }
		}
	}

	return emptySpaces;
}

// Grab random start number
function randomTileNumber() {
	const numbers = [2, 4];
	const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
	return randomNumber;
}

// Place a random number on the matrix
function randomTile(matrix) {
	const emptySpaces = getEmptySpaces(matrix);
	const randomCell = emptySpaces[Math.floor(Math.random() * emptySpaces.length)];
	const randomNumber = randomTileNumber();
	if(randomCell !== undefined){
		matrix[randomCell[0]][randomCell[1]] = randomNumber;
		return matrix;
	}
	alert('Game Over, Bitch');
	return reset(matrix);
}

function moveUp(inputBoard) {
	let rotatedRight = rotateRight(inputBoard);
	let matrix = [];

	// Shift all numbers to the right
	for (let r = 0; r < rotatedRight.length; r++) {
		let row = [];
		for (let c = 0; c < rotatedRight[r].length; c++) {
			let current = rotatedRight[r][c];
			(current === 0) ? row.unshift(current) : row.push(current);
		}
		matrix.push(row);
	}

	// Combine numbers and shift to right
	for (let r = 0; r < matrix.length; r++) {
		for (let c = matrix[r].length - 1; c >= 0; c--) {
			if (matrix[r][c] > 0 && matrix[r][c] === matrix[r][c - 1]) {
				matrix[r][c] = matrix[r][c] * 2;
				matrix[r][c - 1] = 0;
				//score += matrix[r][c];
			} else if (matrix[r][c] === 0 && matrix[r][c - 1] > 0) {
				matrix[r][c] = matrix[r][c - 1];
				matrix[r][c - 1] = 0;
			}
		}
	}

	// Rotate matrix back upright
	matrix = rotateLeft(matrix);

	return matrix;
}

function moveRight(inputMatrix) {
	let matrix = [];
    // Shift all numbers to the right
    for (let r = 0; r < inputMatrix.length; r++) {
      let row = [];      
      for (let c = 0; c < inputMatrix[r].length; c++) {
        let current = inputMatrix[r][c];
        (current === 0) ? row.unshift(current) : row.push(current);
      }
      matrix.push(row);
		}
		
    // Combine numbers and shift to right
    for (let r = 0; r < matrix.length; r++) {
      for (let c = matrix[r].length - 1; c >= 0; c--) {
        if (matrix[r][c] > 0 && matrix[r][c] === matrix[r][c - 1]) {
          matrix[r][c] = matrix[r][c] * 2;
          matrix[r][c - 1] = 0;
        } else if (matrix[r][c] === 0 && matrix[r][c - 1] > 0) {
          matrix[r][c] = matrix[r][c - 1];
          matrix[r][c - 1] = 0;
        }
      }
    }

		return matrix;
}

function moveDown(inputMatrix) {
	let rotatedRight = rotateRight(inputMatrix);
    let matrix = [];
    //let score = 0;

    for (let r = 0; r < rotatedRight.length; r++) {
      let row = [];      
      for (let c = rotatedRight[r].length - 1; c >= 0; c--) {
        let current = rotatedRight[r][c];
        (current === 0) ? row.push(current) : row.unshift(current);
      }
      matrix.push(row);
		}
		
    for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix.length; c++) {
        if (matrix[r][c] > 0 && matrix[r][c] === matrix[r][c + 1]) {
          matrix[r][c] = matrix[r][c] * 2;
          matrix[r][c + 1] = 0;
          //score += matrix[r][c];
        } else if (matrix[r][c] === 0 && matrix[r][c + 1] > 0) {
          matrix[r][c] = matrix[r][c + 1];
          matrix[r][c + 1] = 0;
        }
      }
		}
		
		matrix = rotateLeft(matrix);
		
		return matrix;
}

function moveLeft(inputMatrix) {
	let matrix = [];

	// Shift all numbers to the left
	for (let r = 0; r < inputMatrix.length; r++) {
		let row = [];      
		for (let c = inputMatrix[r].length - 1; c >= 0; c--) {
			let current = inputMatrix[r][c];
			(current === 0) ? row.push(current) : row.unshift(current);
		}
		matrix.push(row);
	}

	// Combine numbers and shift to left
	for (let r = 0; r < matrix.length; r++) {
		for (let c = 0; c < matrix.length; c++) {
			if (matrix[r][c] > 0 && matrix[r][c] === matrix[r][c + 1]) {
				matrix[r][c] = matrix[r][c] * 2;
				matrix[r][c + 1] = 0;
			} else if (matrix[r][c] === 0 && matrix[r][c + 1] > 0) {
				matrix[r][c] = matrix[r][c + 1];
				matrix[r][c + 1] = 0;
			}
		}
	}
	
	return matrix;
}

function checkIfWinner(matrix){
	if(findMaxVal(matrix) === 32){
		console.log('win');
	}
}

function triggerUp(boardMatrix){
	checkIfWinner(boardMatrix);
	return randomTile(moveUp(boardMatrix));
}
function triggerRight(boardMatrix){
	checkIfWinner(boardMatrix);
	return randomTile(moveRight(boardMatrix));
}

function triggerDown(boardMatrix){
	checkIfWinner(boardMatrix);
	return randomTile(moveDown(boardMatrix));
}

function triggerLeft(boardMatrix){
	checkIfWinner(boardMatrix);
	return randomTile(moveLeft(boardMatrix));
}


function matrix(state = initialState, action) {
	switch (action.type) {
		case INIT:
			return {
				boardMatrix: init(state.boardMatrix)
			};
		case PRESS_UP:
			return {
				boardMatrix: triggerUp(state.boardMatrix)
			};
		case PRESS_RIGHT:
			return {
				boardMatrix: triggerRight(state.boardMatrix)
			};
		case PRESS_DOWN:
			return {
				boardMatrix: triggerDown(state.boardMatrix)
			};
		case PRESS_LEFT:
			return {
				boardMatrix: triggerLeft(state.boardMatrix)
			};
		case RESET:
			return {
				boardMatrix: reset(state.boardMatrix)
			}
		default:
			return {
				boardMatrix: state.boardMatrix
			}
	}
}

export default matrix;
