import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import Home from './components/frontend/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/admin/*' name="Admin" element={<MasterLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
