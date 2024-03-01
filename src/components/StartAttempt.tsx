import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, modifyAttempts] = useState<number>(4);
    const [inProgress, modifyProgress] = useState<boolean>(false);
    function startQuiz(): void {
        modifyProgress(true);
        modifyAttempts(attempts - 1);
    }

    return (
        <div>
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>
            <Button
                onClick={() => modifyProgress(false)}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => modifyAttempts(attempts + 1)}
                disabled={inProgress}
            >
                Mulligan
            </Button>{" "}
            Attempts: {attempts}
        </div>
    );
}
