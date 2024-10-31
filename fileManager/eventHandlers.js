import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
export const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

const ensureDirectoryExistence = (filePath) => {
  const dirname = path.dirname(filePath)
  if (fs.existsSync(dirname)) {
    return true
  }
  ensureDirectoryExistence(dirname)
  fs.mkdirSync(dirname)
}

export const createHandler = (name, chosenPath) => {
  const targetPath = path.resolve(__dirname, chosenPath, name)
  ensureDirectoryExistence(targetPath)
  if (name.includes('.')) {
    fs.writeFile(targetPath, '', (err) => {
      if (err) {
        console.log('Error when creating file', err)
        return
      }
      console.log('File was successfully created')
    })
  } else {
    fs.mkdir(targetPath, (err) => {
      if (err) {
        console.log('Error when creating folder', err)
        return
      }
      console.log('Folder was successfully created')
    })
  }
}

export const deleteHandler = (name, chosenPath) => {
  const targetPath = path.resolve(__dirname, chosenPath, name)
  if (name.includes('.')) {
    fs.unlink(targetPath, (err) => {
      if (err) {
        console.log('Error when deleting file', err)
        return
      }
      console.log('File was successfully deleted')
    })
  } else {
    fs.rmdir(targetPath, { recursive: true }, (err) => {
      if (err) {
        console.log('Error when deleting folder', err)
        return
      }
      console.log('Folder was successfully deleted')
    })
  }
}

export const moveHandler = (currentName, newName, chosenPath) => {
  const currentPath = path.resolve(__dirname, chosenPath, currentName)
  const newPath = path.resolve(__dirname, chosenPath, newName)
  fs.rename(currentPath, newPath, (err) => {
    if (err) {
      console.log('Error when moving file or folder', err)
      return
    }
    console.log('File or folder was successfully moved')
  })
}

export const renameHandler = (currentName, newName, chosenPath) => {
  const currentPath = path.resolve(__dirname, chosenPath, currentName)
  const newPath = path.resolve(__dirname, chosenPath, newName)
  fs.rename(currentPath, newPath, (err) => {
    if (err) {
      console.log('Error when renaming file or folder', err)
      return
    }
    console.log('File or folder was successfully renamed')
  })
}
