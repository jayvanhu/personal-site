export type Project = {
	id: number,
	title: string,
	img: string, // TODO make optional?
	description: string,
	link?: string,
	sourceCodeLink?: string,
	tags?: string[], // TODO make into an enum?
}
