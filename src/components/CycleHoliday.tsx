import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "🎄" | "🦃" | "🎃" | "🎂" | "🏖️";

    const [currentHoliday, setHoliday] = useState<Holiday>("🎂");
    const abcOrder: Record<Holiday, Holiday> = {
        "🎂": "🎄",
        "🎄": "🎃",
        "🎃": "🏖️",
        "🏖️": "🦃",
        "🦃": "🎂"
    };
    const chronological: Record<Holiday, Holiday> = {
        "🏖️": "🎃",
        "🎃": "🎂",
        "🎂": "🦃",
        "🦃": "🎄",
        "🎄": "🏖️"
    };

    return (
        <div>
            {" "}
            <Button onClick={() => setHoliday(abcOrder[currentHoliday])}>
                Advanced by Alphabet
            </Button>
            <Button onClick={() => setHoliday(chronological[currentHoliday])}>
                Advance by Year
            </Button>{" "}
            Holiday: {currentHoliday}
        </div>
    );
}
