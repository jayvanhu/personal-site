
/**
 * Takes a map of classname strings to booleans and returns a space-separated string of all the classname keys with true value to be used as a React className.
 */
export function classNames(classes: Record<string, any>): string {
	return Object.entries(classes)
		.filter( ([_classname, shouldUse]) => shouldUse )
		.map( ([classname, _]) => classname )
		.join(' ');
}
