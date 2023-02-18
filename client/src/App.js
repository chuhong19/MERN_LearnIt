import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Auth from './views/Auth';
//import LoginForm from './components/auth/LoginForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path='/login'
          element={<Auth authRoute='login' />}
        />
        <Route
          path='/register'
          element={<Auth authRoute='register' />}
        />
      </Routes>
    </Router>
  );
}


export default App;
