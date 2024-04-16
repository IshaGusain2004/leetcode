/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let a = 0, b = 1;
    let count = 0;
    while (true) {
        if (count === 0) {
            yield a;
        } else {
            yield b;
            [a, b] = [b, a + b];
        }
        count++;
    }
    
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */