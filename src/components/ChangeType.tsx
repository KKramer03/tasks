import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [currentType, setType] = useState<QuestionType>(
        "short_answer_question"
    );

    const activeType: Record<QuestionType, string> = {
        multiple_choice_question: "Multiple Choice",
        short_answer_question: "Short Answer"
    };

    function flipType(): void {
        setType(
            currentType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    }

    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            <div>{activeType[currentType]}</div>
        </div>
    );
}
