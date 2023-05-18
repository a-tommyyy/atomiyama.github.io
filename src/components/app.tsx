import { h } from 'preact';
import { Route, Router } from 'preact-router';
import { Header } from './header';
import { Provider } from '@preact/prerender-data-provider';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Post from '../routes/post';

const App = (props) => (
	<Provider value={props}>
		<div id="app">
			<Header />
			<Header ariaHidden />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/posts/:post_id*" component={Post} />
				</Router>
			</main>
		</div>
	</Provider>
);

export default App