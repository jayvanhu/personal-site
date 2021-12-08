import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import './sliding-navbar.scss'

import { classNames } from "@src/helpers";
import resumeUrl from '@src/assets/resume-public.pdf'

export function SlidingNavbar() {
	const [isNavActive, setNavActive] = useState(false)

	// TODO implement arrow key navigation on nav links?
	return <div className="nav-container">
		<nav id='aria-site-nav' className={`nav-links ${classNames({ active: isNavActive })}`} aria-label='Site' aria-hidden={!isNavActive} >
			<NavLink className='nav-link' activeClassName='active' to='/about' tabIndex={isNavActive ? 0 : -1}>About</NavLink>
			&bull;
			<NavLink className='nav-link' activeClassName='active' to='projects' tabIndex={isNavActive ? 0 : -1}>Projects / Code Samples</NavLink>
			&bull;
			<a href={resumeUrl} className='nav-link' target='_blank' tabIndex={isNavActive ? 0 : -1} >Resume</a>
		</nav>
		<button className='nav-btn' onClick={() => setNavActive(!isNavActive)} aria-label='open site nav' aria-expanded={isNavActive} aria-controls='aria-site-nav' >
			{
				isNavActive ?
				<FaTimes />
				:
				<FaAlignRight />
			}
		</button>
	</div>
}
