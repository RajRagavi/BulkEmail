import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import UserList from './components/Userlist';
import Maillist from './components/Maillist';
import Navbar from './components/Navbar';
import SendEmail from './components/SendEmail';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
 
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/maillist" element={<Maillist />} />
        <Route path="/sendemail" element={<SendEmail />} />
       
      </Routes>
    </Router>
  );
};

export default App;
