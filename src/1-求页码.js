   // 在一个分页表格中，给定每页显示条数（pageSize）和元素的序列号（index），求页码
   export default function getPageNo(pageSize, index) {
       let pageNo = Math.ceil((index + 1) / pageSize)
       return pageNo
   }