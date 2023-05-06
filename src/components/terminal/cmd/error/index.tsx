import { h } from 'preact';
import style from './style.css'

export const CommandError = ({ command }) => {
	return (
		<div>
			<p class={style.error}>command not found: {command}</p>
		</div>
	)
}