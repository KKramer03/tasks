import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currentChoice, setChoice] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="possibleAnswers">
                <Form.Select
                    value={currentChoice}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setChoice(e.target.value)
                    }
                >
                    {options.map((possibleOption) => (
                        <option key={possibleOption} value={possibleOption}>
                            {possibleOption}
                        </option>
                    ))}
                </Form.Select>
                <Form.Text>
                    {currentChoice === expectedAnswer ? "✔️" : "❌"}
                </Form.Text>
            </Form.Group>
        </div>
    );
}
