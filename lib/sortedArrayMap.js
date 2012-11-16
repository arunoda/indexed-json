function SortedArrayMap() {

	var keys = [];
	var values = [];

	this.put = function(key, value) {

		var pos = SortedArrayMap.position(key, keys);
		keys.splice(pos, 0, key);
		values.splice(pos, 0, value);
	};

	this.get = function(index) {

		return {
			key: this.getKey(index),
			value: this.getValue(index)
		};
	};

	this.getKey = function(index) {

		return keys[index];
	};

	this.getValue = function(index) {

		return values[index];
	};

	this.count = function() {

		return keys.length;
	};
}

/* 

	get the element location in the array
	
	@param 
		floor = true get the position of the element or the highest lowest values
		floor = false get the position of the element of get the lowest of the higher values (default)

*/

SortedArrayMap.position =  function position(element, arr, floor) {

	if(arr.length == 0) return 0;
	if(arr[arr.length -1] < element) return arr.length;
	if(arr[0] > element) return 0;

	var start = 0;
	var end = arr.length - 1;

	var index;
	var goRight;

	do {

		index = start + Math.floor((end-start + 1)/2)
		goRight = element > arr[index];

		if(goRight) {
			//go to right
			start = index;
		} else {
			//go to left
			end = index;
		}

	} while(end - start > 1);

	if(floor) {
		return (goRight)? index : start; 
	} else {
		return (goRight)? end : index;
	}
}

module.exports = SortedArrayMap;