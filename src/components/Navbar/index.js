import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScroolNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroolNav(true)
    } else setScroolNav(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>cafeé</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="products"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}>Products</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="deliveries"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}>Deliveries</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}>Sign Up</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
