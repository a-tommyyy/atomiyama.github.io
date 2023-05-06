import { h } from 'preact';
import style from './style.css';
import { Terminal } from '../../components/terminal';

const Home = () => {
	return (
		<div class={style.home}>
			<Terminal />
		</div>
	);
};

export default Home;