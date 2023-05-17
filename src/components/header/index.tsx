import { h } from 'preact';
import style from './style.css';
import { Link } from 'preact-router';

export const Header = ({ ariaHidden }: { ariaHidden?: boolean }) => (
	<header
	 aria-hidden={!!ariaHidden}
	 class={`${style.header} ${ariaHidden ? style.header_hidden : style.header_fixed}`}
	>
		<h1 class={style.title}>Akifumi Akazawa(Tomiyama)</h1>
		<p class={style.subtitle}>Software Engineer skilled in Web Application and Data Engineering.</p>
		<nav>
			<ul>
				<li>
					<Link class="fa-solid fa-terminal" href="/">
						<span class={style.label}>Terminal</span>
					</Link>
				</li>
				<li>
					<a class="fa-brands fa-github" href="https://github.com/atomiyama">
						<span class={style.label}>GitHub</span>
					</a>
				</li>
				<li>
					<a class="fa-brands fa-twitter" href="https://twitter.com/atomiyama1216">
						<span class={style.label}>Twitter</span>
					</a>
				</li>
				<li>
					<a class="fa-brands fa-linkedin" href="https://linkedin.com/in/atomiyama1216">
						<span class={style.label}>LinkedIn</span>
					</a>
				</li>
				<li>
					<a class="fa-brands fa-facebook" href="https://www.facebook.com/atomiyama1216">
						<span class={style.label}>Facebook</span>
					</a>
				</li>
				<li>
					<a class="fa-regular fa-envelope" href="mailto:tomisuker16@gmail.com">
						<span class={style.label}>Email</span>
					</a>
				</li>
			</ul>
		</nav>
		<hr />
	</header>
)
