const fs = require('fs')

//Task 1

fs.mkdir('myFolder', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('[SUCCESS]: Folder created successfully')
})

fs.rmdir('myFolder', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('[SUCCESS]: Folder deleted successfully')
})

//Task 2

fs.writeFile('info.txt', 'Node.js is awesome!', 'utf-8', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('[SUCCESS]: File created successfully')
})

fs.readFile('info.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('[SUCCESS]: File readed successfully | File contains : ' + data)
})
