{

    const singleWave = (pos, n) =>  {
        return x => n / Math.sqrt(Math.PI) * (Math.E ** -((n * (x - pos)) ** 2));
    }

    const doubleWave = (pos0, pos1, n) =>  {
        return x => singleWave(pos0, n)(x) + singleWave(pos1, n)(x);
    }


    const fourierWaveState = (initialState, elements, c, speed = 1) => {
        const waves = [];

        for(let i = 1; i <= elements; i++) {
            const a = globals.math.integrate(x => initialState(x) * Math.sin(i * Math.PI / l * x), 0, 2*l) / l;
            waves.push(Wave(i, a, Math.random()));
        }

        return State(
            (x, t) => {
                const offsets = waves.map(wave => globals.math.waveEquation(x, t, c, wave));
                let offset = 0;
                offsets.forEach(off => offset += off);
                return offset;
            },
            0,
            speed
        )
    }


    const simpleWaveState = (c, n, a, speed = 1) => {
        const wave = Wave(n, a, Math.random());
        return State(
            (x, t) => {
                return globals.math.waveEquation(x, t, c, wave)
            },
            0,
            speed
        )
    }
    
    
    const combineWaveState = (waves, c, speed = 1) => {
        return State(
            (x, t) => {
                const offsets = waves.map(wave => globals.math.waveEquation(x, t, c, wave));
                let offset = 0;
                offsets.forEach(off => offset += off);
                return offset;
            },
            0,
            speed
        )
    }

    globals.wave = {fourier: fourierWaveState, singleWave, doubleWave, simple: simpleWaveState, combine: combineWaveState};
}