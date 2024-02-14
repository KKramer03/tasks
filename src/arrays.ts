/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let copiedArray: number[];

    if (numbers.length === 1) {
        copiedArray = [...numbers, ...numbers];
    } else {
        copiedArray = [...numbers];
        copiedArray.splice(1, copiedArray.length - 2);
    }

    return copiedArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const copiedArray: number[] = numbers.map(
        (originalNum: number): number => originalNum * 3
    );

    return copiedArray;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const copiedArray: number[] = numbers.map(
        (originalString: string): number =>
            parseInt(originalString) ? parseInt(originalString) : 0
    );

    return copiedArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const copiedArray: number[] = amounts.map(
        (originalString: string): number =>
            parseInt(originalString.replace("$", ""))
                ? parseInt(originalString.replace("$", ""))
                : 0
    );

    return copiedArray;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let copiedArray: string[] = messages.map((originalString: string): string =>
        originalString.at(originalString.length - 1) === "!"
            ? originalString.toUpperCase()
            : originalString
    );

    copiedArray = copiedArray.filter(
        (modifiedString: string): boolean =>
            modifiedString.at(modifiedString.length - 1) !== "?"
    );

    return copiedArray;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const copiedArray: string[] = words.filter(
        (shortWord: string): boolean => shortWord.length < 4
    );
    return copiedArray.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const onlyRGB: boolean = colors.every(
        (rgbColor: string): boolean =>
            rgbColor === "red" || rgbColor === "blue" || rgbColor === "green"
    );

    return onlyRGB || colors.length === 0;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum = 0;
    const additionArray: number[] = [...addends];

    if (addends.length > 0) {
        sum = addends.reduce(
            (currentSum: number, num: number) => currentSum + num
        );
    } else {
        sum = 0;
        additionArray.splice(0, 0, 0);
    }

    return `${sum}=` + additionArray.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
