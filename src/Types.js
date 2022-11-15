const vec2 = function (x, y) {
    return {
        x, y
    }
}

const Wave = function(n, c, d) {
    return {
        n,
        c,
        d
    }
}


const State = function(solution, t, simulationSpeed) {
    return {
        solution,
        t,
        simulationSpeed
    }
}
