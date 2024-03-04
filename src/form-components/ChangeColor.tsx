import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Colors = [
    "red",
    "blue",
    "purple",
    "magenta",
    "pink",
    "orange",
    "black",
    "white"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(Colors[0]);
    const colorCodes: Record<string, string> = {
        red: "#FF0000",
        blue: "#00FFFF"
    };

    const colorsList = Colors.map((currentColor: string) => (
        <Form.Check
            inline
            key={currentColor}
            type="radio"
            name="colors"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setColor(e.target.value)
            }
            label={<p style={{ backgroundColor: { color } }}>{currentColor}</p>}
            value={currentColor}
            checked={color === currentColor}
        />
    ));

    return (
        <div>
            {colorsList}
            <p>
                You have chosen <p>{color}</p>
            </p>
            <h3>Change Color</h3>
        </div>
    );
}
