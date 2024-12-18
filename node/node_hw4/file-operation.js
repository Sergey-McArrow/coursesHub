import fs from 'fs'
import { config } from 'dotenv'
import { formattedDate } from './date-format.js'

config()
const file = process.env.FILENAME

fs.writeFile(file, `Hello today is ${formattedDate}`, 'utf8', (err) => {
  if (err) {
    console.error('Ошибка записи файла:', err)
    return
  }
  const fileContent = fs.readFileSync(file, 'utf8')
  console.log(fileContent)
})
