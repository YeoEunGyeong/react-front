import React from 'react'
import { Navbar } from 'react-bootstrap'

const Bottom = () => {
  return (
    <React.Fragment>
      <Navbar fixed="bottom" className="navbar navbar-expand-sm bg-light justify-content-center" bg="dark" style={{ color:'white'}}>
        에스파 콘서트 (주)SM &aespa; 2023
      </Navbar>
    </React.Fragment>
  )
}

export default Bottom

