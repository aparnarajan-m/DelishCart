import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout/Layout'
import './App.css'

function App() {

  return (
    <div className='app-wrapper'>
      <Router>
        <Layout />
      </Router>
      <ToastContainer
        toastClassName="custom-toast"
        position='top-center'
        icon={false}
        hideProgressBar
        closeButton={false}
        closeOnClick
        draggable={false}
        pauseOnHover={false}
        autoClose={1000}
        />
    </div>
  )
}

export default App
