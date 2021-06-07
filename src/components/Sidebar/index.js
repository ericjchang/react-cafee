import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElemets'

const index = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to='about'>About</SidebarLink>
          <SidebarLink onClick={toggle} to='products'>products</SidebarLink>
          <SidebarLink onClick={toggle} to='deliveries'>deliveries</SidebarLink>
          <SidebarLink onClick={toggle} to='signup'>Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default index
