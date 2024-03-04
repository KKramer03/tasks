import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnwser, setAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formGivenAnswer" as={Row}>
                <Form.Label column sm={2}>
                    Answer:
                </Form.Label>
                <Col>
                    <Form.Control value={givenAnwser} onChange={updateAnswer} />
                </Col>
            </Form.Group>
            <h3>{expectedAnswer === givenAnwser ? "✔️" : "❌"}</h3>
        </div>
    );
}
