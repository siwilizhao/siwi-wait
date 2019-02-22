/**
 * @author [siwi]
 * @email [siwilizhao@gmail.me]
 * @create date 2018-04-01 10:56:20
 * @modify date 2018-04-01 10:56:20
 * @desc [wait for nodejs]
*/
module.exports = async function wait (duration) {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve(true)
       }, duration)
   }).catch(err => {
       console.trace(err)
       return false
   })
}