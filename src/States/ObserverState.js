{


    const observerState = (state, position, timeInterval, scale = 1) => {
        return State(
            (x, t) => scale * state.solution(position, x / l * timeInterval),
            0,
            0
        )
    }


    globals.observer = {at: observerState}

}