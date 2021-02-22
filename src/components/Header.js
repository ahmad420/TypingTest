import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function Header() {
  return (
    <>
      {' '}
      <Navbar bg='dark' variant='dark'>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img
              alt=''
              src='../navlogo.png'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            Typing Test
          </Navbar.Brand>
        </LinkContainer>
      </Navbar>
    </>
  )
}

export default Header
