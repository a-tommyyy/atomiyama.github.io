import { h } from 'preact';
import style from './style.css'

export const CommandNotFound = ({ command }) => {
	return (
		<div class={style.error}>
			<p>command not found: {command}</p>
		</div>
	)
}