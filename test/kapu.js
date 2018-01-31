var Buffer = require("buffer/").Buffer;
var should = require("should");
var kapu = require("../index.js");

describe("kapu JS", function () {

	it("should be ok", function () {
		(kapu).should.be.ok;
	});

	it("should be object", function () {
		(kapu).should.be.type("object");
	});

	it("should have properties", function () {
		var properties = ["transaction", "signature", "vote", "delegate", "crypto"];

		properties.forEach(function (property) {
			(kapu).should.have.property(property);
		});
	});

});
