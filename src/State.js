const c = 20;
const elements = 100;

const f = x => 40 * Math.sin(Math.PI*x/l);

const waves = [];

for(let i = 0; i <= elements; i++) {
    const a = integrate(x => f(x) / Math.sin(i * Math.PI * 2 / l * x), 0, l) / l;

    console.log(a,f());
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
    0.01
)