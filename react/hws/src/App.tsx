import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { Homework1 } from './pages/Homework1'
import { Homework2 } from './pages/Homework2'
import { Homework3 } from './pages/Homework3'
import { Homework4 } from './pages/Homework4'
import { Homework5 } from './pages/Homework5'
import { Homework6 } from './pages/Homework6'
import { Homework7 } from './pages/Homework7'
import { Homework8 } from './pages/Homework8'
import { Homework9 } from './pages/Homework9'
import { Homework10 } from './pages/Homework10'
import { Homework12 } from './pages/Homework12'
import { Homework13 } from './pages/Homework13'
import { Homework14 } from './pages/Homework14'
import { Homework15 } from './pages/Homework15'
import { Homework16 } from './pages/Homework16'
import { Homework18 } from './pages/Homework18'

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
