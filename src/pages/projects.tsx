import React from 'react'
import './projects.scss'

import { ProjectCard } from '@src/components/project-card/project-card'
import { useQuery } from 'react-query'
import { getProjects } from '@src/api'

export function ProjectsPage() {
	const { data: projects } = useQuery('projects', getProjects)
	return <section className='project-cards'>
		{
			projects?.map(project => <ProjectCard key={project.id} {...project}></ProjectCard> )
		}
	</section>
}
