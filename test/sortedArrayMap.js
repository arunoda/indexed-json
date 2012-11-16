var SortedArrayMap = require("../lib/SortedArrayMap");
var assert = require("assert");

suite("SortedArrayMapMap", function() {

	suite("position with floor == false", function() {

		test("with 3 elements - one", function() {

			var a = [10, 20, 30];
			assert.equal(2, SortedArrayMap.position(23, a));
		});

		test("with 3 elements - two", function() {

			var a = [10, 20, 30];
			assert.equal(1, SortedArrayMap.position(13, a));
		});

		test("with 3 elements - exact match", function() {

			var a = [10, 20, 30];
			assert.equal(2, SortedArrayMap.position(30, a));
		});

		test("with 10 elements - one", function() {

			var a = [1, 2, 3, 5, 7, 8, 23, 45, 56, 100];
			assert.equal(6, SortedArrayMap.position(21, a));
		});
	});

	suite("position with floor == true", function() {

		test("with 2 elements - one", function() {

			var a = [10, 20, 30, 40, 50, 60, 70];
			assert.equal(0, SortedArrayMap.position(18, a, true));
		});

		test("with 3 elements - one", function() {

			var a = [1, 4, 7, 10];
			assert.equal(2, SortedArrayMap.position(8, a, true));
		});

		test("empty array", function() {

			var a = [];
			assert.equal(0, SortedArrayMap.position(23, a, true));
		});

		test("with 3 elements - one", function() {

			var a = [10, 20, 30];
			assert.equal(1, SortedArrayMap.position(23, a, true));
		});

		test("with 3 elements - two", function() {

			var a = [10, 20, 30];
			assert.equal(0, SortedArrayMap.position(13, a, true));
		});

		test("with 3 elements - exact match", function() {

			var a = [10, 20, 30];
			assert.equal(1, SortedArrayMap.position(30, a, true));
		});

		test("with 10 elements - one", function() {

			var a = [1, 2, 3, 5, 7, 8, 23, 45, 56, 100];
			assert.equal(2, SortedArrayMap.position(4, a, true));
		});
	});


	suite("insert", function() {

		test("sorted array of 5", function() {

			var sa = new SortedArrayMap();
			for(var i=0; i<5; i++) {
				sa.put(Math.ceil(Math.random() * 1000), "val");
			}

			var old = -1;
			for(var i=0; i<sa.count(); i++) {
				
				assert.ok(old <= sa.getKey(i));
				old = sa.getKey(i);
			}
		});
	});
});