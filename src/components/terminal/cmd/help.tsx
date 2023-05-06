import { h } from 'preact';
import style from '../style.css'

export const CommandHelp = () => {
	return (
		<div class={style.output}>
			<p>NAME</p>
			<p>  help - show the list of available commands</p>
			<p>SYNOPSIS</p>
			<p>  help</p>
			<p>DESCRIPTION</p>
			<p>  Show the list of available commands.</p>
		</div>
	)
}