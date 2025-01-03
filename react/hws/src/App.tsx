import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import {
  Homework1,
  Homework2,
  Homework3,
  Homework4,
  Homework5,
  Homework6,
  Homework7,
  Homework8,
  Homework9,
  Homework10,
  Homework12,
  Homework13,
  Homework14,
  Homework15,
  Homework16,
  Homework18,
  Homework19,
  Homework20,
  Homework21,
  Homework22,
  Homework23,
} from './pages'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='homework1' element={<Homework1 />} />
          <Route path='homework2' element={<Homework2 />} />
          <Route path='homework3' element={<Homework3 />} />
          <Route path='homework4' element={<Homework4 />} />
          <Route path='homework5' element={<Homework5 />} />
          <Route path='homework6' element={<Homework6 />} />
          <Route path='homework7' element={<Homework7 />} />
          <Route path='homework8' element={<Homework8 />} />
          <Route path='homework9' element={<Homework9 />} />
          <Route path='homework10' element={<Homework10 />} />
          <Route path='homework12' element={<Homework12 />} />
          <Route path='homework13' element={<Homework13 />} />
          <Route path='homework14' element={<Homework14 />} />
          <Route path='homework15' element={<Homework15 />} />
          <Route path='homework16' element={<Homework16 />} />
          <Route path='homework18' element={<Homework18 />} />
          <Route path='homework19' element={<Homework19 />} />
          <Route path='homework20' element={<Homework20 />} />
          <Route path='homework21' element={<Homework21 />} />
          <Route path='homework22' element={<Homework22 />} />
          <Route path='homework23' element={<Homework23 />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
