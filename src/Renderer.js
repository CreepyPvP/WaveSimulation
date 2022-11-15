const initializeRenderer = function() {
    let canvasRef = document.getElementById("sim");
    let ctx = canvasRef.getContext("2d");

    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    render(ctx, 0);
}


const waves = [
   //Wave(5,100,100)
];

const totalAmp = 200;
for(let i = 1; i <= 6; i++) {
    waves.push(Wave(i, Math.random() * totalAmp / i, Math.random() * totalAmp / i))
}

let drawPixel = function(x, y, t, ctx) {
    const offset = vec2(0,0);
    waves.forEach(wave => {
        const waveOff = waveEqu(x, y, t, wave);
        offset.x += waveOff.x;
        offset.y += waveOff.y;
    })

    ctx.fillRect((x+1) * pixelSpacing + offset.x, (y + 30) * pixelSpacing + offset.y, pixelSize, pixelSize);
}

let clear = function (ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

let render = function (ctx, t) {
    clear(ctx);

    for(let x = 0; x < width+1; x++) {
        for(let y = 0; y < height; y++) {
            drawPixel(x, y, t / 60, ctx);
        }
    }
    requestAnimationFrame(() => render(ctx, t+1));
}

let waveEqu = function(x, y, t, wave) {
    const n = wave.n;

    const strength = Math.sin(n * Math.PI / width * x) * (wave.c * Math.cos(n * Math.PI * c * t / width) + wave.d * Math.sin(n * Math.PI * c * t / width))
    return vec2(
        0,
        strength
    );
}