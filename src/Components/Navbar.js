
//import { Outlet, Route } from "react-router-dom";
//import { Outlet } from 'react-router-dom';
//import Footer from './Footer'
import React from 'react';
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,} from './NavbarElements';

const Navbar = () => {

	return (
	
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/About' activestyle>
			About
		</NavLink>
		<NavLink to='/Team' activestyle>
			Teams
		</NavLink>
		<NavLink to='/SignIn' activestyle>
			Sign In
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/SignUp'>SignUp</NavBtnLink>
		</NavBtn>
	</Nav>
	
);
};

export default Navbar;