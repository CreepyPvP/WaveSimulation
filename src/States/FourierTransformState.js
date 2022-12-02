{

    const fourierState = (state, samplePoints = width) => {
        const points = [];
        for(let i = 0; i < samplePoints; i++) {
            points[i] = state.solution(i / samplePoints * l, 0)
        }

        const data = globals.fourier.dft(points).map(r => globals.imaginary.len(r));
        console.log(data);

        return State(
            x => {
                return data[Math.floor(x / l * samplePoints)] * 0.1
            }, 0, 0);
    }


    globals.fourierState = {of: fourierState}

}