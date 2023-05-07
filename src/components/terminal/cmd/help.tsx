import { h } from 'preact';
import style from './style.css'

export const CommandHelp = () => {
	return (
		<div class={style.output}>
			<div class={style.section}>
				<p class={style.title}>Available Commands :</p>
				<ul>
					<li>help -- List of available commands</li>
					<li>experience -- List of professional experiences</li>
					<li>skills -- List of skills(Not Implemented)</li>
					<li>education -- List of education(Not Implemented)</li>
					<li>contact -- List of contact information(Not Implemented)</li>
					<li>activity -- List of activities and interests(Not Implemented)</li>
				</ul>
			</div>
			<div class={style.section}>
				<p class={style.title}>Special Commands :</p>
				<ul>
					<li>clear -- Clear all command histories</li>
					<li>exit -- Close current browser tab</li>
					<li>cd -- Change location(Not Implemented)</li>
					<li>ls -- List locations and files(Not Implemented)</li>
				</ul>
			</div>
		</div>
	)
}