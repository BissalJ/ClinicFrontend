import React from 'react'
import {ReactNavbar} from 'overlay-navbar'
import logo from '../../Images/logo.png'
import {FaUserAlt} from "react-icons/fa"

const Header = () => {
  return (
    <ReactNavbar 
    navColor1="white"
    navColor2="#5DADE2"
    burgerColor="#5DADE2"
    burgerColorHover="#7FB3D5"
    logo={logo}
    logoWidth="500px"
    logoHoverColor="#5DADE2"
    nav2justifyContent="space-around"
    nav3justifyContent="space-around"
    link1Text="Home"
    link2Text="About"
    link3Text="Book an Appointment"
    link4Text="Contact"
    link1Url="/"
    link2Url="/about"
    link3Url="/appointment"
    link4Url="/contact"
    link1ColorHover="white"
    link1Color="#ECF0F1"
    link1Size="1.25rem"
    link1Padding="3vmax"
    profileIcon={true}
    ProfileIconElement={FaUserAlt}
    profileIconColor="white"
    />
  )
}

export default Header