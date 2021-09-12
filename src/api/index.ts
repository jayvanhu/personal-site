import personalUrl from '@src/assets/personal.jpg'
import discordUrl from '@src/assets/discord-ui.jpg'
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
		sourceCodeLink: 'https://github.com/jayvanhu/personal-site',
		tags: ['React'],

	// Putting this in the backlog
	// }, {
	// 	id: id(),
	// 	title: 'Github Issues Page',
	// 	img: gitUrl,
	// 	description: 'A clone of the UI of the Issues page of Github repositories.',
	// 	// TODO do i actually need a projects config
	// 	link: projectsConfig.githubIssues,
	// 	tags: ['WIP', 'React'],

	}, {
		id: id(),
		title: 'Discord UI',
		img: discordUrl,
		description: 'A clone of the UI for the Discord voice chat application.',
		tags: ['WIP', 'React'],
	}]

	return Promise.resolve(cardProps)
}
