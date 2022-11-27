{

    const equationState = (equation, speed = 1) => {
        return State(equation, 0, speed);
    }


    globals.equationState = {from: equationState}

}