{
    const init = () => {
        let canvasRef = document.getElementById("sim");
        let ctx = canvasRef.getContext("2d");
    
        ctx.canvas.width  = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
    
        render(ctx, 0);
    }
    
    
    globals.currentState = null;
    
    const drawPixel = (x, t, ctx) => {
        const offset = globals.currentState.solution(x / scaleX, t);
    
        ctx.fillRect((x+1) * pixelSpacing, 30 * pixelSpacing + offset * scaleY, pixelSize, pixelSize);
    }
    
    const clear = (ctx) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
    
    const render = (ctx) => {
        clear(ctx);
    
        if(globals.currentState !== null) {
            for(let x = 0; x < width+1; x++) {
                drawPixel(x, globals.currentState.t, ctx);
            }
        
            globals.currentState.t += 1/60 * globals.currentState.simulationSpeed;
        }
        requestAnimationFrame(() => render(ctx));
    }

    globals.renderer = {init};
}