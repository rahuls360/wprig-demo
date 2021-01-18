import SignupForm from "../SignupForm";
const { render, useState } = wp.element;

const Votes = () => {
	const [votes, setVotes] = useState(0);
	const addVote = () => {
		setVotes(votes + 1);
	};
	return (
		<div>
			<h2>{votes} Votes</h2>
			<p>
				<button onClick={addVote}>Vote!</button>
			</p>
			<SignupForm />
		</div>
	);
};
render(<Votes />, document.getElementById(`pricing-root`));
