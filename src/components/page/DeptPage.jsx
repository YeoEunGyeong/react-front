import React from 'react'
import Bottom from '../include/Bottom'
import Header from '../include/Header'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { useEffect } from 'react';

const DeptPage = () => {
  const [depts, setDepts] = useState([
  {deptno:10, dname:"개발 1팀", loc:"부산"},
  {deptno:20, dname:"개발 2팀", loc:"양산"},
  {deptno:30, dname:"개발 3팀", loc:"진해"}
  ]);
  useEffect(() => {
      // setDepts(depts)
      console.log(depts)
    }, []);
    // 옵션에 별도의 값을 지정하지 않으면 최초 한 번만 실행
  console.log(depts);
  return (
    <>
      <Header />
      <div>부서 관리 페이지</div>
      <div className="dept-list">
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>부서 번호</th>
              <th>부서명</th>
              <th>지역</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(depts).map(key => (
            <tr key = {key}>
              <td>{depts[key].deptno}</td>
              <td>{depts[key].dname}</td>
              <td>{depts[key].loc}</td>
            </tr>
            ))
            }
          </tbody>
        </Table>
      </div>
      <Bottom />
    </>
  )
}

export default DeptPage
