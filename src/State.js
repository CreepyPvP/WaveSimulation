const c = 20;
const elements = 50;

const f = x => x*2;

const waves = [];

for(let i = 1; i <= elements; i++) {
    const a = integrate(x => f(x) * Math.sin(i * Math.PI * 2 / l * x), 0, l) / l;

    console.log(a);
    waves.push(Wave(i, a, Math.random()));
}

// console.log(integrate(x => (f(x) / Math.sin(0)), 0, width))

currentState = State(
    (x, t) => {
        const offsets = waves.map(wave => waveEquation(x, t, c, wave));
        let offset = 0;
        offsets.forEach(off => offset += off);
        return offset;
    },
    0,
    c,
    0.0
)