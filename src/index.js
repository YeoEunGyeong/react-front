import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthLogic from "./service/authLogic";
import firebaseApp from "./service/firebase";
// 공통 코드 -> service > authLogic.js > import 외부 js 재사용 가능 > export default 클래스명 > module
// 브라우저에서 import 하려면 반드시 bable 필요

const authLogic = new AuthLogic(firebaseApp); // 인스턴스화(파라미터가 올 수 있음)
// 파라미터가 왜 필요 ?? firebaseApp > import firebaseApp from "./service/firebase"; > export default firebaseApp
// authLogic.firebase에서 제공하는 함수 호출
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      {/* App 컴포넌트를 렌더링할 때 속성 자리에 주소 번지 넘길 수 있음 - props */}
      {/* 태그와 JS를 섞어쓰기 가능함 : { } */}
      <App authLogic={authLogic} />
    </BrowserRouter>
  </>
);
