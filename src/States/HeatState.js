{
    const elements = 100;

    const heats = []
    
    const n = 10;

    const h = x => n / Math.sqrt(Math.PI) * (Math.E ** -((n * (x - 0.5)) ** 2));
    
    for(let i = 1; i <= elements; i++) {
        const amplitude = globals.math.integrate(x => h(x) * Math.cos(2 * i * Math.PI / l * x), 0, 2*l) / l;
        heats.push(Heat(i, 1, amplitude));
    }
    
    
    const heatState = State(
        (x, t) => {
            const offsets = heats.map(heat => globals.math.diffusionEquation(x, t, heat));
            let offset = 0;
            offsets.forEach(off => offset += off);
            return offset;
        },
        0,
        0.01
    )

    globals.heatState = heatState;
}