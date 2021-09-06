// 素数是大于1的，只能被1和本身整除的数
export default function isPrime(num) {
    // 非数字、非整数、或者小于等于1,都不符合
    if (typeof num != "number" || !Number.isInteger(num) || num <= 1) {
        console.log('数据不合法');
        return false
    }
    // 2是最小的素数
    if (num === 2) {
        return true
    } else if (num % 2 === 0) {
        // 排除偶数
        return false
    }
    // 求平方根
    let n = Math.sqrt(num)
    for (let i = 3; i <= n; i += 2) {
        if (num % i === 0) return false
    }
    return true
}