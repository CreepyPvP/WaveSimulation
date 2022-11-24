{
    const stateMap = {
        "state-1": globals.waveState,
        "state-2": globals.heatState,
        "state-3": State(() => 0, 0, 1, 0)
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