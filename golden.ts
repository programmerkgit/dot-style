const phi = (1 + Math.sqrt(5)) / 2;
let width = 300;
let font;
for (let font = 10; font < 30; font++) {
    for (let width = 100; width < 1000; width += 100) {
        const k = 1 / (2 * phi);
        const fw = function (width, font) {
            return 1 - width / Math.pow(font * phi, 2);
        };
        const fwp = function (width, font) {
            return phi - k * fw(width, font);
        };
        const result = Math.round((fwp(width, font)) * font);
        console.log(width, font, fwp(width, font));
    }
}