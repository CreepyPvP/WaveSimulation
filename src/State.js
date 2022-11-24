{
    const c = 20;
    const elements = 100;

    const n = 10;
    const f = x =>  n / Math.sqrt(Math.PI) * (Math.E ** -((n * (x - 0.5)) ** 2));

    const waves = [];

    // console.log(f(0.5), integrate(x => f(x) * Math.sin(3*x), 0, 2*Math.PI) / l)

    for(let i = 1; i <= elements; i++) {
        const a = globals.math.integrate(x => f(x) * Math.sin(2 * i * Math.PI / l * x), 0, 2*l) / l;
        waves.push(Wave(i, a, Math.random()));
    }

    // console.log(integrate(x => (f(x) / Math.sin(0)), 0, width))

    const waveState = State(
        (x, t) => {
            const offsets = waves.map(wave => globals.math.waveEquation(x, t, c, wave));
            let offset = 0;
            offsets.forEach(off => offset += off);
            return offset;
        },
        0,
        0.02
    )

    globals.waveState = waveState;
}