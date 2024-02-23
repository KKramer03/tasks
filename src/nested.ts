import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const copyofQuestions = questions.map(
        (questionsCopy: Question): Question => ({
            ...questionsCopy,
            options: [...questionsCopy.options]
        })
    );

    return copyofQuestions.filter(
        (publishedQuestions: Question): boolean =>
            publishedQuestions.published === true
    );
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const copyofQuestions = questions.map(
        (questionsCopy: Question): Question => ({
            ...questionsCopy,
            options: [...questionsCopy.options]
        })
    );

    return copyofQuestions.filter(
        (nonEmptyQuestions: Question): boolean =>
            nonEmptyQuestions.body !== "" ||
            nonEmptyQuestions.expected !== "" ||
            nonEmptyQuestions.options.length !== 0
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const copyofQuestions = questions.map(
        (questionsCopy: Question): Question => ({
            ...questionsCopy,
            options: [...questionsCopy.options]
        })
    );

    const idIndex = copyofQuestions.findIndex(
        (matchingID: Question): boolean => matchingID.id === id
    );

    return idIndex >= 0 ? copyofQuestions[idIndex] : null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const copyofQuestions = questions.map(
        (questionsCopy: Question): Question => ({
            ...questionsCopy,
            options: [...questionsCopy.options]
        })
    );

    return copyofQuestions.filter(
        (question: Question): boolean => question.id !== id
    );
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const copyofQuestions = questions.map(
        (questionsCopy: Question): Question => ({
            ...questionsCopy,
            options: [...questionsCopy.options]
        })
    );

    return copyofQuestions.map(
        (questionNames: Question): string => questionNames.name
    );
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const copyofQuestions = questions.map(
        (questionsCopy: Question): Question => ({
            ...questionsCopy,
            options: [...questionsCopy.options]
        })
    );

    return copyofQuestions.reduce(
        (currentSum: number, currentQuestion: Question) =>
            currentSum + currentQuestion.points,
        0
    );
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let copyofQuestions = questions.map(
        (questionsCopy: Question): Question => ({
            ...questionsCopy,
            options: [...questionsCopy.options]
        })
    );

    copyofQuestions = copyofQuestions.filter(
        (publishedQuestions: Question): boolean =>
            publishedQuestions.published === true
    );

    return copyofQuestions.reduce(
        (currentSum: number, currentQuestion: Question) =>
            currentSum + currentQuestion.points,
        0
    );
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const initialString = "id,name,options,points,published\n";
    const copyofQuestions = questions.map(
        (questionsCopy: Question): Question => ({
            ...questionsCopy,
            options: [...questionsCopy.options]
        })
    );
    const stringCopy = copyofQuestions.map(
        (questionEntry: Question): string =>
            `${questionEntry.id},${questionEntry.name},${questionEntry.options.length},${questionEntry.points},${questionEntry.published}`
    );

    return initialString + stringCopy.join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const copyofQuestions = questions.map(
        (questionsCopy: Question): Question => ({
            ...questionsCopy,
            options: [...questionsCopy.options]
        })
    );

    const answers: Answer[] = copyofQuestions.map(
        (questiontoAnswer: Question): Answer => ({
            questionId: questiontoAnswer.id,
            text: "",
            submitted: false,
            correct: false
        })
    );

    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const copyofQuestions = questions.map(
        (questionsCopy: Question): Question => ({
            ...questionsCopy,
            options: [...questionsCopy.options]
        })
    );
    return copyofQuestions.map(
        (publishedQuestions: Question): Question => ({
            ...publishedQuestions,
            published: true
        })
    );
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const copyofQuestions = questions.map(
        (questionsCopy: Question): Question => ({
            ...questionsCopy,
            options: [...questionsCopy.options]
        })
    );
    return copyofQuestions.every(
        (sameType: Question): boolean =>
            copyofQuestions[0].type === sameType.type
    );
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const copyofQuestions = questions.map(
        (questionsCopy: Question): Question => ({
            ...questionsCopy,
            options: [...questionsCopy.options]
        })
    );

    return copyofQuestions.map(
        (targetQuestion: Question): Question =>
            targetQuestion.id === targetId
                ? { ...targetQuestion, name: newName }
                : targetQuestion
    );
}

function conditionalReplacer( //Helper function for changeQuestionTypeById
    targetQuestion: Question,
    givenQuestionType: QuestionType
): Question {
    let newOptionsList: string[];

    if (givenQuestionType !== "multiple_choice_question") {
        newOptionsList = [];
    } else {
        newOptionsList = [...targetQuestion.options];
    }

    const newQuestion: Question = {
        ...targetQuestion,
        options: newOptionsList,
        type: givenQuestionType
    };

    return newQuestion;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */

export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const copyofQuestions = questions.map(
        (questionsCopy: Question): Question => ({
            ...questionsCopy,
            options: [...questionsCopy.options]
        })
    );

    const newQuestionList = copyofQuestions.map(
        (targetQuestion: Question): Question =>
            targetQuestion.id === targetId
                ? conditionalReplacer(targetQuestion, newQuestionType)
                : targetQuestion
    );

    return newQuestionList;
}

function editHelper( //Helper function for below function
    givenQuestion: Question,
    optionIndex: number,
    newOptionChoice: string
): Question {
    let newQuestion: Question;
    const optionsCopy = [...givenQuestion.options];

    if (optionIndex === -1) {
        newQuestion = {
            ...givenQuestion,
            options: [...optionsCopy, newOptionChoice]
        };
    } else {
        optionsCopy.splice(optionIndex, 1, newOptionChoice);
        newQuestion = { ...givenQuestion, options: [...optionsCopy] };
    }

    return newQuestion;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const copyofQuestions = questions.map(
        (questionsCopy: Question): Question => ({
            ...questionsCopy,
            options: [...questionsCopy.options]
        })
    );

    return copyofQuestions.map(
        (targetQuestion: Question): Question =>
            targetQuestion.id === targetId
                ? editHelper(targetQuestion, targetOptionIndex, newOption)
                : targetQuestion
    );
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const copyofQuestions = questions.map(
        (questionsCopy: Question): Question => ({
            ...questionsCopy,
            options: [...questionsCopy.options]
        })
    );

    const matchingIndex = copyofQuestions.findIndex(
        (matchingQuestion: Question): boolean =>
            matchingQuestion.id === targetId
    );

    copyofQuestions.splice(
        matchingIndex + 1,
        0,
        duplicateQuestion(newId, questions[matchingIndex])
    );

    const duplicateQuestionArray = copyofQuestions;

    return duplicateQuestionArray;
}
