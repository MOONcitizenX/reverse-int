module.exports = function reverse(num) {
    return +[...`${Math.abs(num)}`].reverse().join("");
};
