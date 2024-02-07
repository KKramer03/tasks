import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import img from "./images/juan.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1 className="newApp-header">This is a header</h1>
            <Container>
                <Row>
                    <div
                        style={{
                            backgroundColor: "red",
                            width: "25%",
                            height: "25%"
                        }}
                    >
                        <Col>
                            {" "}
                            <ol>
                                <li>This list is column #1</li>
                                <li>The image is column #2</li>
                                <li>Horse</li>
                            </ol>{" "}
                        </Col>
                    </div>
                    <div
                        style={{
                            backgroundColor: "red",
                            width: "25%",
                            height: "25%"
                        }}
                    >
                        <Col>
                            <img
                                src={img}
                                width={300}
                                height={250}
                                alt="horse"
                            />
                        </Col>
                    </div>
                </Row>
            </Container>

            <p> Kevin Kramer</p>
            <p> Hello World</p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
