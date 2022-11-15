const c = 20;
const elements = 10;

const f = x => x**2;

const waves = [];

for(let i = -elements; i <= elements; i++) {
    const a = integrate(x => f(x) / Math.sin(i * Math.pi * 2 / width * x), 0, width) / width;

    waves.push(Wave(i, a, Math.random()));
}

currentState = State(
    (x, t) => {
        const offsets = waves.map(wave => waveEquation(x, t, c, wave));
        let offset = 0;
        offsets.forEach(off => offset += off);
        return offset;
    },
    0,
    c,
    0
)