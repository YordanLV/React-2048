export function findMaxVal(matrix) {
	const maxRow = matrix.map(function(row){ return Math.max.apply(Math, row); });
	const maxNum = Math.max.apply(null, maxRow);
	return maxNum;
}

export function isObjEqual(preObj, obj) {
  return JSON.stringify(preObj) === JSON.stringify(obj);
}

export function rotateRight(matrix) {
	let result = [];

	for (let cols = 0; cols < matrix.length; cols++) {
		let row = [];
		for (let rows = matrix.length - 1; rows >= 0; rows--) {
			row.push(matrix[rows][cols]);
		}
		result.push(row);
	}

	return result;
}

export function rotateLeft(matrix) {
  let result = [];

  for (let cols = matrix.length - 1; cols >= 0; cols--) {
    let row = [];
    for (let rows = matrix.length - 1; rows >= 0; rows--) {
      row.unshift(matrix[rows][cols]);
    }
    result.push(row);
  }

  return result;
}

export function shiftRigh(matrix){
  for (let rows = 0; rows < matrix.length; rows++) {
		let row = [];
		for (let cols = 0; cols < matrix[rows].length; cols++) {
			let current = matrix[rows][cols];
			(current === 0) ? row.unshift(current) : row.push(current);
		}
	return matrix.push(row);
	}
}