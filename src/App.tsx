import React from 'react'
import './App.scss'
import './styles/global.scss'

import { FaFilePdf, FaGithub, FaHeart, FaLinkedin } from 'react-icons/fa'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { SlidingNavbar } from './components/sliding-navbar/sliding-navbar'
import { contactConfig } from './config'
import { DiReact } from 'react-icons/di'
import resumeUrl from '@src/assets/resume-public.pdf'


export default function App() {
	return <Router>
		<header className='landing-header'>
			<DiReact />
			<SlidingNavbar />
		</header>
		<main>
			<Switch>
				<Redirect from='/' to='about' exact></Redirect>
				<Route path='/about'>
					<section className='blurb'>
						<h4>Full-Stack <FaHeart className='heart' /> Engineering</h4>
						<p>React.js, TypeScript, &amp; a variety of backend languages</p>
					</section>
					<section className='description'>
						<h4>I'm Jason Huynh, a curious, eager full-stack engineer.</h4>
						<p>todo</p>
					</section>
				</Route>
				<Route path='/projects'>
					<h1>todo</h1>
				</Route>
			</Switch>
		</main>
		<footer className='footer'>
			<a href={contactConfig.linkedinLink}>
				<FaLinkedin />
			</a>
			<a href={contactConfig.githubLink}>
				<FaGithub />
			</a>
			<a href={resumeUrl} target='_blank'>
				<FaFilePdf />
			</a>
		</footer>
	</Router>
}
