import React from 'react'
import './anchor.scss'

type Props = {
	href: string,
	children?: React.ReactNode,
}

export function Anchor({ href, children }: Props) {
	return <a href={href} className='link'>{children}</a>
}
