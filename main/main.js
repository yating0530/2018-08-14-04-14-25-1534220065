module.exports = function main(str) {
    console.log("Debug Info");
    // return 'Hello World!';
    var lcd = [ ['._.','...','._.','._.','...','._.','._.','._.','._.','._.'],
				['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'],
				['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|'] ];
	var result = '';
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < str.length; j++) {
			result += lcd[i][parseInt(str.charAt(j))];
			if (j!=str.length-1) {
				result += ' ';
			}
		}
		result += '\n';
	}
	return result;
};