import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import FireDeptPage from './components/page/FireDeptPage';
import EmpPage from './components/page/EmpPage';
import Homepage from './components/page/Homepage';
import LoginPage from './components/login/LoginPage';
// index.js에서 브라우저 라우터로 감싸진 App 태그 속성값으로 넘어온 주소 번지 받음
const App = ({authLogic}) => {
  // 사용자 정의 컴포넌트에서 return 다음에 오는 코드가 element의 집합
  // Router 이용하면 SPA(single page application) 누릴 수 있음
  return (
    <>
    <Routes>
      <Route path='/' exact={true} element={<LoginPage authLogic={authLogic}/>} />
      <Route path='/home/:userId' exact={true} element={<Homepage authLogic={authLogic}/>} />
      {/* 로그아웃 처리를 위해서 {<Homepage authLogic={authLogic}/>} */}
      <Route path='/dept/:id' exact={true} element={<FireDeptPage/>} />
      <Route path='/emp' exact={true} element={<EmpPage/>} />
    </Routes>
    </>
  );
}

export default App;