const initializeRenderer = function() {
    let canvasRef = document.getElementById("sim");
    let ctx = canvasRef.getContext("2d");

    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    render(ctx, 0);
}


let currentState = null;

const drawPixel = function(x, t, ctx) {
    const offset = currentState.solution(x, t);

    ctx.fillRect((x+1) * pixelSpacing, 30 * pixelSpacing + offset, pixelSize, pixelSize);
}

const clear = function (ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

const render = function (ctx) {
    clear(ctx);

    if(currentState !== null) {
        for(let x = 0; x < width+1; x++) {
            drawPixel(x, currentState.t / 60, ctx);
        }

        currentState.t += 1/60 * currentState.simulationSpeed;
    }
    requestAnimationFrame(() => render(ctx));
}