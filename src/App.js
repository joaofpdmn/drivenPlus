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
import Users from './Pages/Users';
import UserUpdate from './Pages/UserUpdate';

function App() {
  const [login, setLogin] = useState(getUserData());

  return (
    <BrowserRouter>
      <UserContext.Provider value={{login, setLogin}}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/subscriptions/:simounao' element={<ChoosePlan />} />
          <Route path='/home' element={<WelcomePage />} />
          <Route path='/inscricao/:id' element={<Payment />} />
          <Route path='/users/:id' element={<Users/>}/>
          <Route path='/users/:id/update' element={<UserUpdate />}/>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
