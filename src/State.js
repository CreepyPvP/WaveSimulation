const c = 20;
const elements = 10;

const f = x => 2*x;

const waves = [];

for(let i = -elements; i <= elements; i++) {
    const a = integrate(x => f(x) / Math.sin(i * Math.PI * 2 / width * x), 0, width) / width;

    // console.log(a);
    waves.push(Wave(i, a, Math.random()));
}

console.log(integrate(x => (f(x) / Math.sin(0)), 0, width))

currentState = State(
    (x, t) => {
        const offsets = waves.map(wave => waveEquation(x, t, c, wave));
        let offset = 0;
        offsets.forEach(off => offset += off);
        return offset;
    },
    0,
    c,
    1
)