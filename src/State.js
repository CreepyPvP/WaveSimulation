const waves = [
    //Wave(5,100,100)
 ];
 
 const totalAmp = 200;
 for(let i = 1; i <= 6; i++) {
     waves.push(Wave(i, Math.random() * totalAmp / i, Math.random() * totalAmp / i))
 }
 
 currentState = State(
     (x, t) => {
         const offsets = waves.map(wave => waveEquation(x, t, wave));
         let offset = 0;
         offsets.forEach(off => offset += off);
         return offset;
     },
     0,
     20
 )