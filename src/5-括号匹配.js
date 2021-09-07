// 括号匹配：给定一个括号表达式，中间只有[]和()，判断这个表达式两边括号是不是平衡的，
// 比如[(())]是平衡的，[()(()])就是不平衡的
// 基于栈的算法，先入先出
export default function isBalance(str) {
    // 过滤无效内容
    let newStr = []
    str.split('').forEach(element => {
        if (element == '[' || element == ']' || element == '(' || element == ')') newStr.push(element)
    });
    // 解构newStr,first对应newStr数组的第一项，剩下的元素都放到others数组里
    let [first, ...others] = newStr
    // 准备一个栈,先把第一项放到栈底
    let stack = [first]
        // 循环其他元素
    while (others.length > 0) {
        // c是栈顶元素
        let c = stack[stack.length - 1]
            //n是剩余数组元素的第一项，shift数组的第一个元素从其中删除，并返回第一个元素的值。
        let n = others.shift()
        if (!match(n, c)) {
            // 不平衡就压栈
            stack.push(n)
        } else {
            // 平衡就出栈
            stack.pop()
        }
    }
    return stack.length === 0
}
export function match(n, c) {
    return (c == '[' && n == ']') || (c == '(' && n == ')')
}