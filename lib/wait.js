/**
 * @author [siwi]
 * @email [siwilizhao@gmail.me]
 * @create date 2018-04-01 10:56:20
 * @modify date 2018-04-01 10:56:20
 * @desc [阻塞执行 等待一段时间]
*/
module.exports = async function wait (duration) {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve(true)
       }, duration)
   })
}