// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return []
    }
    let out = [];
    matrix.forEach((item, index) => {
        let temp = (index % 2 == 0) ? item : item.reverse();
        temp.forEach(tempItem => {
            out.push(tempItem);
        })
    });
    return out;
}