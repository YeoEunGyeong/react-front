import React from 'react'
import { useParams } from 'react-router-dom'
import Bottom from '../include/Bottom'
import Header from '../include/Header'
// 로그아웃 처리를 위해서 props에 authLogic 주소 번지 받아옴
const Homepage = ({authLogic}) => {
  let {userId} = useParams()
  console.log(userId);
  const onLogout = () => {
    authLogic.logout()
  }
  return (
    <React.Fragment>
      <Header userId = {userId} onLogout = {onLogout} />
      <div>
        HomePage
      </div>
    <Bottom />
    </React.Fragment>
  )
}

export default Homepage