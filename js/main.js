
// Semantically meaningful way to access bldg and floor numbers
function bldg(i) {
	return function(l) {
		var plusTwo = function(l1, i) {
			return l1
		}
		return plusTwo(l)
	}(i);
}
function floor(i) {return i;}