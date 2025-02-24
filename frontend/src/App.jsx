import React from 'react';
import Dashboard from './pages/Dashboard';
import AddFeedback from './Pages/AddFeedback';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Main child={<Dashboard/>}/>} />
        <Route path="/addfeedback" element={<Main child={<AddFeedback/>}/>} />
    </Routes>
  );
};

export default App;
