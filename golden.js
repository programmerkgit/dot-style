var phi = (1 + Math.sqrt(5)) / 2;
var width = 300;
var font;
for (var font_1 = 10; font_1 < 30; font_1++) {
    var _loop_1 = function (width_1) {
        var k = 1 / (2 * phi);
        var fw = function (width, font) {
            return 1 - width / Math.pow(font * phi, 2);
        };
        var fwp = function (width, font) {
            return phi - k * fw(width, font);
        };
        var result = Math.round((fwp(width_1, font_1)) * font_1);
        console.log(width_1, font_1, fwp(width_1, font_1));
    };
    for (var width_1 = 100; width_1 < 1000; width_1 += 100) {
        _loop_1(width_1);
    }
}
