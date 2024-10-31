import readline from 'readline'
import { folderEmitter } from './actions.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  'Do you want to create, delete, move, or rename a folder or file? (c/d/m/r): ',
  (action) => {
    rl.question('Enter the path: ', (chosenPath) => {
      switch (action.toLowerCase()) {
        case 'c':
          rl.question(
            'Enter the name of the folder or file to create: ',
            (name) => {
              folderEmitter.emit('create', name, chosenPath)
              rl.close()
            }
          )
          break
        case 'd':
          rl.question(
            'Enter the name of the folder or file to delete: ',
            (name) => {
              folderEmitter.emit('delete', name, chosenPath)
              rl.close()
            }
          )
          break
        case 'm':
          rl.question(
            'Enter the current name of the folder or file: ',
            (currentName) => {
              rl.question(
                'Enter the new name/path for the folder or file: ',
                (newName) => {
                  folderEmitter.emit('move', currentName, newName, chosenPath)
                  rl.close()
                }
              )
            }
          )
          break
        case 'r':
          rl.question(
            'Enter the current name of the folder or file: ',
            (currentName) => {
              rl.question(
                'Enter the new name for the folder or file: ',
                (newName) => {
                  folderEmitter.emit('rename', currentName, newName, chosenPath)
                  rl.close()
                }
              )
            }
          )
          break
        default:
          console.log(
            'Invalid action. Please enter "c" to create, "d" to delete, "m" to move, or "r" to rename.'
          )
          rl.close()
      }
    })
  }
)
