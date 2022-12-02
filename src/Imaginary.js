{

    const of = (real, imaginary = 0) => {
        return {
            real,
            imaginary
        }
    }

    const i = of(0, 1);


    // Math operations

    const add = (a, b) => {
        return {
            real: a.real + b.real,
            imaginary: a.imaginary + b.imaginary
        }
    }

    
    const mul = (a, b) => {
        return {
            real: a.real * b.real - a.imaginary * b.imaginary,
            imaginary: a.real * b.imaginary + a.imaginary * b.real
        }
    }


    const exp = (a, b) => {
        const length = Math.sqrt(a.real**2 + a.imaginary**2);
        const dot = a.real / length;
        const phy = Math.acos(dot);

        const x = of(globals.math.log(length, Math.E), Math.PI * phy / 180);

        const exponent = mul(x, b);

        const real = Math.E ** exponent.real;

        return of(real * Math.cos(exponent.imaginary), real * Math.sin(exponent.imaginary))
    }

    console.log(exp(of(Math.E), of(0, 2*Math.PI)))

}