const integrate = (f, from, to) => {
    const delta = 0.0005;
    let sum = 0;

    for(let i = from; i < to; i += delta) {
        const r = f(i);
        if(!r || r === Infinity || r === -Infinity) continue;

        sum += r * delta;
    }

    return sum;
}


const waveEquation = (x, t, c, wave) => {
    const n = wave.n;

    return wave.a * Math.sin(n * Math.PI / l * x) * (Math.cos(n * Math.PI * c * t / l) + wave.d * Math.sin(n * Math.PI * c * t / l))
}


const diffusionEquation = (x, t, heat) => {
    return heat.amplitude * Math.cos(x* heat.n * Math.PI / l) * Math.E ** (-heat.a * ((heat.n * Math.PI / l) ** 2) * t)
}