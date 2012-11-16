var SortedArray = require('./sortedArray');

function IndexedJSON (objects) {

	if(!(objects instanceof Array)) {
		objects = [];
	}

	var indices = this._indices = {};

	this.createIndex = function(indexKey) {

		var hash = {};

		var keys = indexKey.split(".");

		for(var oid in objects) {

			var object = objects[oid];

			var result = object;
			for(var index in keys) {
				
				var key = keys[index];
				var newresult = result[key];
				if(newresult) {
					result = result[key];
				} else {
					result = null;
					break;
				}
			}

			if(result) {

				if(!hash[result]) {
					hash[result] = [];
				}

				hash[result].push(oid);
			}

		};

		indices[indexKey] = {
			hash: hash
		};

	};
}

module.exports = IndexedJSON;