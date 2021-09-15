import React from 'react'
import './App.scss'
import './styles/global.scss'

import { FaFilePdf, FaGithub, FaHeart, FaLinkedin } from 'react-icons/fa'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { SlidingNavbar } from './components/sliding-navbar/sliding-navbar'
import { contactConfig } from './config'
import { DiReact } from 'react-icons/di'
import resumeUrl from '@src/assets/resume-public.pdf'
import { ProjectsPage } from './pages/projects'
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient()
export default function App() {
	return <QueryClientProvider client={queryClient}><Router>
		<header className='landing-header'>
			<DiReact className='header-icon' />
			<SlidingNavbar />
		</header>
		<main>
			<Switch>
				<Redirect from='/' to='about' exact></Redirect>
				<Route path='/about'>
					<section className='blurb' aria-label='blurb'>
						<h4>Full-Stack <FaHeart className='heart' /> Engineering</h4>
						<p>React.js, TypeScript, &amp; a variety of backend languages</p>
					</section>
					<section className='description' aria-label='description'>
						<h4>Jason Huynh</h4>
						<p>I'm a curious, versatile engineer eager to learn new skills &amp; technologies and apply them across both frontend and backend.</p>
						<p>I care about leaving code better than when I found it and approach coding with an attention for clarity, modularity, and maintainability.</p>
					</section>
				</Route>
				<Route path='/projects'>
					<ProjectsPage />
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
	</Router></QueryClientProvider>
}
