const vec2 = (x, y) => {
    return {
        x, y
    }
}

const Wave = (n, a, d) => {
    return {
        n,
        a,
        d
    }
}


const Heat = (n, a, amplitude) => {
    return {
        n,
        a,
        amplitude
    }
}



const State = (solution, t, simulationSpeed) => {
    return {
        solution,
        t,
        simulationSpeed
    }
}

const toLongitudinal = state => {
    state.longitudinal = true;
    return state;
}
