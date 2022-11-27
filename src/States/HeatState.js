{

    const singleHeatSource = (pos, n) =>  {
        return x => n / Math.sqrt(Math.PI) * (Math.E ** -((n * (x - pos)) ** 2));
    }

    const doubleHeatSource = (pos0, pos1, n) =>  {
        return x => singleHeatSource(pos0, n)(x) + singleHeatSource(pos1, n)(x);
    }

    const binary = (amplitude) => {
        return x => x > l/2? 0 : amplitude;
    }


    const fourierHeatState = (initialState, elements, a, speed = 1) => {
        const heats = []

        for(let i = 1; i <= elements; i++) {
            const amplitude = globals.math.integrate(x => initialState(x) * Math.cos(i * Math.PI / l * x), 0, 2*l) / l;
            heats.push(Heat(i, a, amplitude));
        }


        return State(
            (x, t) => {
                const offsets = heats.map(heat => globals.math.diffusionEquation(x, t, heat));
                let offset = 0;
                offsets.forEach(off => offset += off);
                return offset;
            },
            0,
            speed
        )
    }

    globals.diffusion = {fourier: fourierHeatState, singleHeatSource, doubleHeatSource, binary};
}