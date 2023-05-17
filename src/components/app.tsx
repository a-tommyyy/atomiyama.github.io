import { h } from 'preact';
import { Route, Router } from 'preact-router';
import { Header } from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Posts from '../routes/posts';

const App = () => (
	<div id="app">
		<Header />
		<Header ariaHidden />
		<main>
			<Router>
				<Route path="/" component={Home} />
				<Route path="/posts" component={Posts} />
			</Router>
		</main>
	</div>
);

export default App;
