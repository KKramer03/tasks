import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remaining, setRemaining] = useState<string>("3");
    const [requested, setRequested] = useState<string>("0");

    function attemptHelper(attempts: string, useOrGain: boolean): string {
        if (useOrGain) {
            return (parseInt(remaining) - 1).toString();
        } else {
            return isNaN(parseInt(attempts)) || parseInt(attempts) < 0
                ? parseInt(remaining).toString()
                : (parseInt(remaining) + parseInt(attempts)).toString();
        }
    }

    return (
        <div>
            <Form.Group controlId="formRequestedAttempts" as={Row}>
                <Form.Label column sm={2}>
                    Request Attempts
                </Form.Label>
                <Col>
                    <Form.Control
                        type="number"
                        value={requested}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setRequested(e.target.value)
                        }
                    ></Form.Control>
                </Col>
                <Col>
                    <Button
                        onClick={() =>
                            setRemaining(attemptHelper(remaining, true))
                        }
                        disabled={parseInt(remaining) === 0}
                    >
                        use
                    </Button>
                    <Button
                        onClick={() =>
                            setRemaining(attemptHelper(requested, false))
                        }
                    >
                        gain
                    </Button>
                </Col>
                <Col> Remaining Attempts: {remaining}</Col>
            </Form.Group>
            <h3>Give Attempts</h3>
        </div>
    );
}
