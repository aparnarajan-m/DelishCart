import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout/Layout'
import './App.css'

function App() {

  return (
    <div className='app-wrapper'>
      <Router>
        <Layout/>
      </Router>
    </div>
  )
}

export default App
