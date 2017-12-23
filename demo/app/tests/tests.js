var TbMaterial = require("nativescript-tb-material").TbMaterial;
var tbMaterial = new TbMaterial();

describe("greet function", function() {
    it("exists", function() {
        expect(tbMaterial.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(tbMaterial.greet()).toEqual("Hello, NS");
    });
});