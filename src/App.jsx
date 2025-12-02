import './App.css'
import{RouterProvider} from 'react-router'
import {ScrollRestoration} from 'react-router'
import router from './routes'

function App() {

  return (
    <>
    <RouterProvider router = {router}>
      <ScrollRestoration />  
    </RouterProvider>
    </>
  )
}

export default App
