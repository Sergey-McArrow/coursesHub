import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

export const HW16 = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h2' sx={{ paddingBlock: 4 }}>
            App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Typography variant='h4' gutterBottom>
          Greetings!
        </Typography>
        <Button
          variant='contained'
          sx={{ p: 2, borderRadius: 2 }}
          onClick={handleClickOpen}
        >
          Open Dialog
        </Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Close Dialog?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is the text inside Dialog
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} variant='contained'>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  )
}
