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
    "palegreen"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(Colors[0]);

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
                <span style={{ backgroundColor: currentColor }}>
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
                    style={{ backgroundColor: color }}
                    data-testid="colored-box"
                >
                    {color}
                </span>
            </p>
            <h3>Change Color</h3>
        </div>
    );
}
