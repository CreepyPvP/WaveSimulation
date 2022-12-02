{
    const waveState = globals.wave.combine([Wave(2, 2, Math.random()), Wave(3, 1, Math.random())], 1)
    const observerState = globals.observer.at(waveState, 1, 20, 0.3);

    const stateMap = {
        "state-1": waveState,
        "state-2": observerState,
        "state-3": globals.fourierState.of(observerState),
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