import personalUrl from '@src/assets/personal.jpg'
import discordUrl from '@src/assets/discord-ui.jpg'
import golangBlogUrl from '@src/assets/golang-blog-scrape.jpg'
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
		description: 'This website that you\'re viewing right now. Bulit with accessibility and responsive design in mind. Occasionally updated to apply newly learned frontend skills.',
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
		description: 'A clone of the UI for the Discord voice chat application. Uses Docker to run as a full-stack app to query mock data form a GraphQL backend.',
		tags: ['WIP', 'React', 'Nest.js', 'GraphQL', 'Docker'],
		sourceCodeLink: 'https://github.com/jayvanhu/discord-ui',
	}, {
		id: id(),
		title: 'Golang Blog Scraper',
		img: golangBlogUrl,
		description: 'A web scraper written in Golang to scrape Joel\'s blog. Utilizes goroutines and rate limiting to scrape the site concurrently and safely. Outputs result to an html file.',
		tags: ['Golang', 'Scripting'],
		sourceCodeLink: 'https://github.com/jayvanhu/blog-scrape',
	}]

	return Promise.resolve(cardProps)
}
