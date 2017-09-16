function setup() {
    createCanvas(710, 400);
    background(200);
    loadStrings('assets/test.txt', pickString);
}

function pickString(result) {
    background(200);
    var ind = floor(random(result.length));
    text(result[ind], 10, 10, 80, 80);
}