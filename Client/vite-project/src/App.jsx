import Header from './Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddRoom from './Components/AddRoom'
import Allotroom from './Components/Allotroom'
import SearchRoom from './Components/SearchRoom'
import Allroom from './Components/Allroom'


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>

        <Route path="/addroom" element={<AddRoom />} />
        <Route path="/allotroom" element={<Allotroom />} />
        <Route path="/searchroom" element={<SearchRoom />} />
        <Route path="/allroom" element={<Allroom />} />
      </Routes>
    </Router>
  )
}

export default App
