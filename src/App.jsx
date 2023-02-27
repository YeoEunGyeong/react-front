import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import FireDeptPage from './components/page/FireDeptPage';
import EmpPage from './components/page/EmpPage';
import Homepage from './components/page/Homepage';
import LoginPage from './components/login/LoginPage';

function App({authLogic}) {
  return (
    <>
    <Routes>
      <Route path='/' exact={true} element={<LoginPage authLogic={authLogic}/>} />
      <Route path='/home/:userId' exact={true} element={<Homepage/>} />
      <Route path='/dept/:id' exact={true} element={<FireDeptPage/>} />
      <Route path='/emp' exact={true} element={<EmpPage/>} />
    </Routes>
    </>
  );
}

export default App;