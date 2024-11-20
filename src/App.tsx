import { Route, Routes } from 'react-router-dom'
import './style/App.scss'
import Layout from './hook/Layout'
import Catalogpage from './pages/Catalogpage'
import Productpage from './pages/Productpage'
import Cartpage from './pages/Cartpage'
import Notfoundpage from './pages/Notfoundpage'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Catalogpage />} />
        <Route path='product/:id' element={<Productpage />}/>
        <Route path='cart' element={<Cartpage />}/>
        <Route path='*' element={<Notfoundpage />}/>
      </Route>
    </Routes>
  )
}

export default App
