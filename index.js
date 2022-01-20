// function readTheData(){
//     const fs = require('fs') 
// const data = fs.readFileSync('data.json','utf-8') 
// return  data
// }
// console.log(readTheData())


function readTheData(){
    const fs = require('fs')
fs.readFile('.data', (err, data) => {
  if (err) throw err
  console.log(data.toString('utf-8'))

})
}
   readTheData()