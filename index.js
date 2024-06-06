const addDays = require('date-fns/addDays')
const functiondate = days => {
  newdate = addDays(new Date(22, 7, 2020), days)
 return (
    `${newdate.getDate()}-${newdate.getMonth() + 1}-${newdate.getFullYear}`,
 )
  
}
module.exports = functiondate
