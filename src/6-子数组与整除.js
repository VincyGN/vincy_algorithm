// 写一个函数，给定一个数组，判断数组中的某一项，或者任意多项的和，是否被另一个整数整除，比如
// solve（[3，5，8],13）=true
// solve（[3，9],15）=false
// solve（[7，8,2],7）=true
// 相当于求数组的全部组合，求余数，然后去重
export default function solve(array, num) {
    let s = new Set()
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j <= array.length; j++) {
            let remains = array.slice(i, j).reduce((x, y) => x + y, 0) % num
            console.log(remains);
            s.add(remains)
        }
    }
    return s.has(0)
}