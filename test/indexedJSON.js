var IndexedJSON = require("../lib/indexedJSON");
var assert = require("assert");

suite("IndexedJSON", function() {

	suite("createIndex() with hash only", function() {

		test("with single key", function() {

			var data = [
				{name: "one"}, {name: "two"}, {name: "three"}, {name: "one"}
			];

			var idj = new IndexedJSON(data);
			idj.createIndex("name");

			var hash = idj._indices["name"].hash;
			assert.deepEqual(hash, {
				"one": [0, 3],
				"two": [1],
				"three": [2]
			});
		});

		test("with single key - empty keys too", function() {

			var data = [
				{name: "one"}, {name: "two"}, {age: "three"}, {name: "one"}
			];

			var idj = new IndexedJSON(data);
			idj.createIndex("name");

			var hash = idj._indices["name"].hash;
			assert.deepEqual(hash, {
				"one": [0, 3],
				"two": [1]
			});
		});

		test("with nested key", function() {

			var data = [
				{ marks: { english: 100 } },
				{ marks: { english: 80 } },
				{ marks: { english: 70 } },
				{ marks: { english: 80 } },
			];

			var idj = new IndexedJSON(data);
			idj.createIndex("marks.english");

			var hash = idj._indices["marks.english"].hash;
			assert.deepEqual(hash, {
				100: [0],
				80: [1, 3],
				70: [2]
			});
		});

		test("with nested key - empty keys too", function() {

			var data = [
				{ marks: { english: 100 } },
				{ marks: { english: 80 } },
				{ marks: { sinhala: 70 } },
				{ marks: { english: 80 } },
			];

			var idj = new IndexedJSON(data);
			idj.createIndex("marks.english");

			var hash = idj._indices["marks.english"].hash;
			assert.deepEqual(hash, {
				100: [0],
				80: [1, 3]
			});
		});
	});
});