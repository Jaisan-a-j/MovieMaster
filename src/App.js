import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Loginpage />} />
          <Route path='/register' element={<Registerpage />} />
          <Route path='/' element={<Navigate to='/login' />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
