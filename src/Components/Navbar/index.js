import React from 'react'

import { Bars, Nav, NavIcon, MenuBtn } from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
       
        <NavIcon onClick={toggle}>
        <p>orgnica</p>
        <Bars />
        </NavIcon>
        <MenuBtn>im your guy</MenuBtn>

    </Nav>
    </>
  )
}

export default Navbar