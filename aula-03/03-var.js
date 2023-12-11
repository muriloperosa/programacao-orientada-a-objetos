function testVar() {
    var var01 = "var 01";
    {
        var var02 = "var 02";
        console.log("1 var01", var01);
        console.log("1 var02", var02);
        var var01 = "var 01 B";
    }
    
    var var01 = "var 01 C";

    console.log("");
    console.log("2 var01", var01);
    console.log("2 var02", var02);
}

testVar();