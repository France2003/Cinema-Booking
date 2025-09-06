
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultLayOut from './layouts/defaulayout/layout'
import HomePages from './pages/homepages'
import Register from './pages/register'
import Login from './pages/login'
import { ToastContainer } from 'react-toastify'
import AdminLayout from './layouts/adminlayout/adminlayout'
import HomeAdmin from './pages/adminpages/home'

function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<DefaultLayOut />}>
            <Route index element={<HomePages />} />
          </Route>
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<HomeAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
