const integrate = function(f, from, to) {
    const delta = 0.001;
    let sum = 0;

    for(let i = from; i < to; i += delta) {
        sum += f(i) * delta;
    }

    return sum;
}


const waveEquation = function(x, t, c, wave) {
    const n = wave.n;

    return wave.a * Math.sin(2 * n * Math.PI / width * x) * (Math.cos(n * Math.PI * c * t / width) + wave.d * Math.sin(n * Math.PI * c * t / width))
}