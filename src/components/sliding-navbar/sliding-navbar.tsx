import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import './sliding-navbar.scss'

import { classNames } from "@src/helpers";
import resumeUrl from '@src/assets/resume-public.pdf'

export function SlidingNavbar() {
	const [isNavActive, setNavActive] = useState(false)

	return <div className="nav-container">
		<nav className={`nav-links ${classNames({ active: isNavActive })}`} aria-label='Site' >
			<NavLink className='nav-link' activeClassName='active' to='/about'>About</NavLink>
			&bull;
			<NavLink className='nav-link' activeClassName='active' to='projects'>Projects / Code Samples</NavLink>
			&bull;
			<a href={resumeUrl} className='nav-link' target='_blank' >Resume</a>
		</nav>
		<button className='nav-btn' onClick={() => setNavActive(!isNavActive)}>
			{
				isNavActive ?
				<FaTimes />
				:
				<FaAlignRight />
			}
		</button>
	</div>
}
