import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import FireDeptPage from './components/page/FireDeptPage';
import EmpPage from './components/page/EmpPage';
import Homepage from './components/page/Homepage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' exact={true} element={<Homepage/>} />
      <Route path='/dept/:id' exact={true} element={<FireDeptPage/>} />
      <Route path='/emp' exact={true} element={<EmpPage/>} />
    </Routes>
    </>
  );
}

export default App;