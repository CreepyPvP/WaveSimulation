{
    const stateMap = {
        "state-1": globals.equationState.from((x, t) => Math.sin(x) * Math.sin(t)),
        "state-2": globals.equationState.from((x, t) => Math.sin(x + t)),
        "state-3": globals.wave.simple(1, 1, 1),
        "state-4": globals.wave.simple(1, 2, 1),
        "state-5": globals.wave.simple(1, 3, 1),
        "state-6": globals.wave.combine([Wave(1, 2, Math.random()), Wave(2, 1, Math.random())], 1),
        "state-7": globals.wave.fourier(globals.wave.singleWave(1, 6), 100, 0.3),
        "state-8": toLongitudinal(globals.wave.fourier(globals.wave.singleWave(1, 6), 100, 0.3)),
        "state-9": globals.wave.fourier(globals.wave.doubleWave(1, 2, 6), 100, 0.3),
        "state-10": globals.diffusion.fourier(globals.diffusion.singleHeatSource(1, 6), 100, 0.04),
        "state-11": globals.diffusion.fourier(globals.diffusion.binary(5), 100, 0.04)
    }
    
    
    const toggleButton = document.getElementById("toggle");
    
    const panel = document.querySelector(".panel");
    
    toggleButton.addEventListener("click", () => {
        if(panel.classList.contains("closed")) {
            panel.classList.remove("closed")
        } else {
            panel.classList.add("closed")
        }
    })
    
    
    let activeState = "state-1";
    
    const toggleState = () => {
        globals.currentState = stateMap[activeState];
    }
    
    document.querySelectorAll(".state").forEach(state => {
        const id = state.id;
    
        //
    
        state.addEventListener("click", () => {
            if(activeState === id)
                return;
    
            document.getElementById(activeState).classList.remove("active");
    
            activeState = id;
            state.classList.add("active");
    
            toggleState();
        })
    })
    toggleState();
}