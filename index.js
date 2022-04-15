"use strict";
const UPPER = "Upper",
    LOWER = "Lower";

module.exports = input => {
    const arr = input.split("");
    return arr
        .map((char, index) => {
            const isFirst = !index;
            const getCase = ch => {
                if (!ch) {
                    return null;
                }
                if (!!parseInt(ch)) {
                    return UPPER;
                }
                return ch == ch.toLowerCase() ? LOWER : UPPER;
            };
            const currentCase = getCase(char);
            const nextCase = getCase(arr[index + 1]);
            const prevCase = getCase(arr[index - 1]);
            if (!isFirst &&
                currentCase == UPPER &&
                (nextCase == LOWER || prevCase == LOWER)
            ) {
                return `_${char}`;
            }
            return char.toUpperCase();
        })
        .join("");
};