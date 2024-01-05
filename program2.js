/**
 * @param {string} s
 * @return {number}
 */

function value(r) {
    if (r == 'I')
        return 1;
    if (r == 'V')
        return 5;
    if (r == 'X')
        return 10;
    if (r == 'L')
        return 50;
    if (r == 'C')
        return 100;
    if (r == 'D')
        return 500;
    if (r == 'M')
        return 1000;
    return -1;
}

var romanToInt = function (s) {


    var ans = 0;

    for (i = 0; i < s.length; i++) {
        var s1 = value(s.charAt(i));
        if (i + 1 < s.length) {
            var s2 = value(s.charAt(i + 1));
            if (s1 >= s2) {
                ans = ans + s1;
            }
            else {
                ans = ans + s2 - s1;
                i++;
            }
        }
        else {
            ans = ans + s1;
        }
    }
    console.log(ans);
    return ans;

};


module.exports = { romanToInt }
