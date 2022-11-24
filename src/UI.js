{
    const stateMap = {
        "state-1": globals.wave.fourier(globals.wave.doubleWave(2, 0.2, 7), 100, 0.15, 1),
        "state-2": globals.diffusion.fourier(globals.diffusion.singleHeatSource(3, 7), 100, 0.001, 1),
        "state-3": globals.diffusion.fourier(globals.diffusion.binary(5), 100, 0.05, 1),
        "state-4": globals.wave.fourier(globals.diffusion.binary(1), 100, 0.15, 1)
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