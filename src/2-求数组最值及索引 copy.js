   // 1-擂台思想
   export function getMax1(arr) {
       let maxObj = {
           maxNO: arr[0],
           num: 0
       }
       arr.forEach((element, index) => {
           if (element > maxObj.maxNO) {
               maxObj.maxNO = element
               maxObj.num = index
           }
       });
       return maxObj
   }

   // 2-math.max方法
   export function getMax2(arr) {
       let maxItem = Math.max(...arr)
       return maxItem
   }

   // 3-sort()+reverse()
   export function getMax3(arr) {
       function sortNumber(a, b) {
           return a - b
       }
       let max = arr.sort(sortNumber).reverse()[0]
       return max
   }