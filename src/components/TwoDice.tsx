import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [diceOneValue, rollDiceOne] = useState<number>(1);
    const [diceTwoValue, rollDiceTwo] = useState<number>(2);
    function winCalculator(): string {
        return diceOneValue + diceTwoValue === 2 ? "Lose" : "Win";
    }

    return (
        <div>
            {" "}
            <span data-testid="left-die">
                Current Left Die Value : {diceOneValue}{" "}
            </span>{" "}
            <span data-testid="right-die">
                Current Right Die Value : {diceTwoValue}{" "}
            </span>
            <div>
                {" "}
                <Button onClick={() => rollDiceOne(d6)}>Roll Left</Button>
                <Button onClick={() => rollDiceTwo(d6)}>Roll Right</Button>{" "}
                <div>
                    {diceOneValue === diceTwoValue ? winCalculator() : ""}
                </div>
            </div>
        </div>
    );
}
