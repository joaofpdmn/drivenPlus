import './assets/reset.css'
import './assets/style.css'
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ChoosePlan from './Pages/ChoosePlan';
import WelcomePage from './Pages/WelcomePage';
import UserContext from './Context/UserContext';
import { getUserData } from './Services/UserData';
import Payment from './Pages/Payment';

function App() {
  const [login, setLogin] = useState(getUserData());

  return (
    <BrowserRouter>
      <UserContext.Provider value={{login, setLogin}}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/subscriptions' element={<ChoosePlan />} />
          <Route path='/home' element={<WelcomePage />} />
          <Route path='/subscriptions/:id' element={<Payment />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
