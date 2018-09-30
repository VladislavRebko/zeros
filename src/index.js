module.exports = function getZerosCount(number) {
	
	let countOfZeros = 0;

	while(number > 0){
		number = Math.floor(number / 5);
		countOfZeros += number;
	}

	return countOfZeros;

}
