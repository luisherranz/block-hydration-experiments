import { useState } from '../../gutenberg-packages/wordpress-element';
import Button from './shared/button';
import Title from './shared/title';

// const useState = (initialValue) => [initialValue, () => {}];

const View = ({ children }) => {
	const [show, setShow] = useState(true);
	const [bold, setBold] = useState(true);
	const [counter, setCounter] = useState(0);

	return (
		<div
			className={`${show ? 'show' : 'hide'}`}
		>
			<Title>Title</Title>
			<Button handler={() => setShow(!show)}>Show</Button>
			<Button handler={() => setBold(!bold)}>Bold</Button>
			<button onClick={() => setCounter(counter + 1)}>
				{counter}
			</button>
			{show && children}
		</div>
	);
};

export default View;
