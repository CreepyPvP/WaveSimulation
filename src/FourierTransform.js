{
    
    const dft = (arr) => {
        const output = [];
        const N = arr.length;

        for(let i = 0; i < N; i++) {
            let sum = globals.imaginary.of(0,0);
            for(let j = 0; j < N; j++) {
                const component = globals.imaginary.mul(globals.imaginary.of(arr[j], 0), globals.imaginary.expI(-2 * Math.PI / N * j * i));
                sum = globals.imaginary.add(sum, component);
            }
            output[i] = sum;
        }

        return output;
    }


    globals.fourier = {dft};

}