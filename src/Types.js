const vec2 = function (x, y) {
    return {
        x, y
    }
}

const Wave = function(n, a, d) {
    return {
        n,
        a,
        d
    }
}


const State = function(solution, t, c, simulationSpeed) {
    return {
        solution,
        t,
        c,
        simulationSpeed
    }
}
