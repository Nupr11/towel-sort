// You should implement your task here.

module.exports = function towelSort(matrix) {
    /* for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let output = [matrix[i][j]].join(" ");
        }
    }
    return output; */

    if (typeof matrix === "undefined") return [];

    const newArray = [];

    for (let i = 0; i < matrix.length; i++) {
        const sortedInnerArray =
            i % 2
                ? matrix[i].sort((a, b) => b - a)
                : matrix[i].sort((a, b) => a - b);

        sortedInnerArray.forEach((i) => newArray.push(i));
    }

    return newArray;
};
