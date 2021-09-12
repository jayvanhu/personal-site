import React from "react"
import './project-card.scss'

import { Project } from "@src/models"
import { Anchor } from "../anchor/Anchor"

export function ProjectCard({ title, img, description, link, sourceCodeLink, tags }: Project) {
	return <article className='project-card'>
		<h4 id='aria-project-card__img-label' className='project-card__title'>{title}</h4>
		<img className='project-card__image project-card__section' src={img} alt='' role='presentation' aria-labelledby='aria-project-card__img-label' />
		<section className='project-card__body project-card__section'>
			<div className='project-card__tags'>
				{ tags?.map(tag => <span key={tag} className='tag'>{tag}</span>) }
			</div>
			<p>{description}</p>
			<div className='project-card__links'>
				{ link ? <Anchor href={link}>Link</Anchor> : null }
				{ sourceCodeLink ? <Anchor href={sourceCodeLink}>Source</Anchor> : null }
			</div>
		</section>
	</article>
}
