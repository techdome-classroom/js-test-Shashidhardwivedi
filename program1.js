/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    const st = [];
    const pairs = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    for (let char of s) {
        if (pairs[char]) {
            st.push(char);
        } else if (char === ")" || char === "]" || char === "}") {
            if (
                pairs[st.pop()] !==char
            ) {
                return false;
            }
        }
    }
    return st.length === 0;
};


module.exports = { isValid };


