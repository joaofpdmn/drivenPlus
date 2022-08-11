import './assets/reset.css'
import './assets/style.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ChoosePlan from './Pages/ChoosePlan';
import Payment from './Pages/Payment';
import WelcomePage from './Pages/WelcomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login /> }/>
        <Route path='/sign-up' element={ <SignUp /> } />
        <Route path='/subscriptions' element={<ChoosePlan />}/>
        <Route path='/subscriptions/ID_DO_PLANO' element={<Payment />} />
        <Route path='./home' element={<WelcomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
