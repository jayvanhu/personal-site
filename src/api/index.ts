import personalUrl from '@src/assets/personal.jpg'
import gitUrl from '@src/assets/github.jpg'
import { projectsConfig } from "@src/config"
import { Project } from "@src/models"

let _id = -1;
function id() {
	_id++
	return _id
}

export function getProjects(): Promise<Project[]> {
	const cardProps: Project[] = [{
		id: id(),
		title: 'Personal Website',
		img: personalUrl,
		description: 'This website that you\'re viewing right now.',
		link: 'todo',
		sourceCodeLink: 'todo',
		tags: ['React'],
	}, {
		id: id(),
		title: 'Github Issues Page',
		img: gitUrl,
		description: 'A clone of the UI of the Issues page of Github repositories.',
		// TODO do i actually need a projects config
		link: projectsConfig.githubIssues,
		tags: ['WIP', 'React'],
	}]

	return Promise.resolve(cardProps)
}
