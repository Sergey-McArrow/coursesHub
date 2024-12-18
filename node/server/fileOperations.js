import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
export const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)
const pathName = path.join(__dirname, 'example.jpeg')
const newPathName = path.join(__dirname, 'reanamedExample.jpeg')

fs.writeFile(pathName, '', (err) => {
  if (err) {
    console.error('[ERROR while creating file]: ', err)
    return
  }
  console.log('[SUCCESS]: File created')

  fs.rename(pathName, newPathName, (err) => {
    if (err) {
      console.error('[ERROR while renaming]: ', err)
      return
    }
    console.log('[SUCCESS]: File renamed')

    fs.copyFile(newPathName, path.join(__dirname, 'copy.jpeg'), (err) => {
      if (err) {
        console.error('[ERROR while coping]: ', err)
        return
      }
      console.log('[SUCCESS]: File copied')
      fs.unlink(newPathName, (err) => {
        if (err) {
          console.error('[ERROR while deleting]: ', err)
          return
        }
        console.log('[SUCCESS]: File deleted')
      })
    })
  })
})
