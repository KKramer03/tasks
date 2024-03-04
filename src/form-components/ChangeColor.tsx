import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Colors = [
    "red",
    "blue",
    "violet",
    "cyan",
    "magenta",
    "purple",
    "turquoise",
    "green"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(Colors[0]);
    const colorCodes: Record<string, string> = {
        red: "#FF0000",
        blue: "#1F51FF",
        violet: "#7F00FF",
        cyan: "#00FFFF",
        magenta: "#FF00FF",
        purple: "#C3B1E1",
        turquoise: "#40E0D0",
        green: "#0FFF50"
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
            label={
                <span style={{ backgroundColor: colorCodes[currentColor] }}>
                    {currentColor}
                </span>
            }
            value={currentColor}
            checked={color === currentColor}
        />
    ));

    return (
        <div>
            {colorsList}
            <p>
                You have chosen{" "}
                <span
                    style={{ backgroundColor: colorCodes[color] }}
                    data-testid="colored-box"
                >
                    {color}
                </span>
            </p>
            <h3>Change Color</h3>
        </div>
    );
}
