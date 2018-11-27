import { initialState } from '../initialState';
import { PRESS_UP, PRESS_DOWN, PRESS_LEFT, PRESS_RIGHT } from '../actionTypes';
import { cloneableGenerator } from 'redux-saga/utils';

function board(state = initialState, action) {
	switch (action.type) {
		case PRESS_UP:
			return {
				boardMatrix: moveUp(state.boardMatrix)
			};
		case PRESS_RIGHT:
			return {
				boardMatrix: moveRight(state.boardMatrix)
			};
		case PRESS_DOWN:
			return {
				boardMatrix: moveDown(state.boardMatrix)
			};
		case PRESS_LEFT:
			return {
				boardMatrix: moveLeft(state.boardMatrix)
			};
		default:
			return {
				boardMatrix: placeRandom(state.boardMatrix) 
			}
	}
}

// Get all blank coordinates from board
function getBlankCoordinates(board) {
	const blankCoordinates = [];
	
	for (let r = 0; r < board.length; r++) {
		for (let c = 0; c < board[r].length; c++) {
			if (board[r][c] === 0) {blankCoordinates.push([r, c])}
		}
	}
					
	return blankCoordinates;
}

// Grab random start number
function randomStartingNumber() {
	const startingNumbers = [2,4];
	const randomNumber = startingNumbers[Math.floor(Math.random() * startingNumbers.length)];
	return randomNumber;
}

// Place random starting number on an empty coordinate
function placeRandom(board) {
	const blankCoordinates = getBlankCoordinates(board);
	const randomCoordinate = blankCoordinates[Math.floor(Math.random() * blankCoordinates.length)];
	const randomNumber = randomStartingNumber();
	board[randomCoordinate[0]][randomCoordinate[1]] = randomNumber;
	return board;
}

// Compares two boards to check for movement
function boardMoved(original, updated) {
	return (JSON.stringify(updated) !== JSON.stringify(original)) ? true : false;
}

function moveUp(board){
	console.log('Up');
	return board;
}

function moveRight(board){
	console.log('Right');
	return board;
}

function moveDown(board){
	console.log('Down');
	return board;
}

function moveLeft(board){
	console.log('Left');
	return board;
}

export default board;
