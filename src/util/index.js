export function rotateRight(matrix) {
	let result = [];

	for (let c = 0; c < matrix.length; c++) {
		let row = [];
		for (let r = matrix.length - 1; r >= 0; r--) {
			row.push(matrix[r][c]);
		}
		result.push(row);
	}

	return result;
}

export function rotateLeft(matrix) {
  let result = [];

  for (let c = matrix.length - 1; c >= 0; c--) {
    let row = [];
    for (let r = matrix.length - 1; r >= 0; r--) {
      row.unshift(matrix[r][c]);
    }
    result.push(row);
  }

  return result;
}

export function shiftRigh(matrix){
  for (let r = 0; r < matrix.length; r++) {
		let row = [];
		for (let c = 0; c < matrix[r].length; c++) {
			let current = matrix[r][c];
			(current === 0) ? row.unshift(current) : row.push(current);
		}
	return matrix.push(row);
	}
}