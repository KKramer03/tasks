import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudentStatus] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <p>
                {name} {isStudent === true ? "is a " : "is not a"} student
            </p>
            <Form.Check
                type="switch"
                id="editModeToggle"
                label="Toggle Edit Mode"
                checked={editMode}
                onChange={() => setEditMode(!editMode)}
            />
            {editMode && (
                <Form.Check
                    type="checkbox"
                    id="studentStatusToggle"
                    label="Toggle Student Status"
                    checked={isStudent}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setStudentStatus(e.target.checked)
                    }
                />
            )}
            {editMode && (
                <Form.Group controlId="formStudentNameStatus">
                    <Form.Label>Student Information</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setName(e.target.value)
                        }
                        disabled={!editMode}
                    />
                </Form.Group>
            )}
        </div>
    );
}
