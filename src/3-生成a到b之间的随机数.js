   // 生成a到b直接的随机整数
   export default function getRandom(a, b) {
       let randomNum = Math.round(Math.random() * (b - a) + a)
       //    let randomCeilNum = Math.ceil(randomNum) //向上取整
       //    let randomRoundNum = Math.round(randomNum) //四舍五入取整
       return randomNum
   }