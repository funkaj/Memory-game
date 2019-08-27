import React, { Component } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import friends from './friends.json';
import './App.css';
import { Typography } from '@material-ui/core';

const state = {
	friends,
	score: 0,
	topScore: 0,
};
class App extends Component {
	constructor(props) {
		super(props);
		this.state = state;
	}
	// reset board and score for new game
	resetGame = () => {
		const friends = this.state.friends.map(friend => ({
			...friend,
			clicked: false,
		}));
		this.setState({ score: 0, friends });
	};

	// handle the click element
	handleClick = id => {
		let clickedfriend = this.state.friends.find(friend => friend.id === id);
		if (clickedfriend.clicked) {
			this.resetGame();
		} else {
			clickedfriend.clicked = true;
			let newfriends = this.state.friends.filter(friend => friend.id !== id);
			newfriends.push(clickedfriend);

			// then set the new state
			this.setState({
				...this.state,
				score: this.state.score + 1,
				topScore:
					this.state.score === this.state.topScore
						? this.state.topScore + 1
						: this.state.topScore,
				friends: newfriends,
			});
		}
	};

	render() {
		return (
			<div>
				<PrimarySearchAppBar />
				<Wrapper>
					<Title>Silver-Hawks Memory</Title>
					<Typography variant='display2'>Score: {this.state.score}</Typography>

					<Typography variant='display2'>
						Top Score: {this.state.topScore}
					</Typography>
				</Wrapper>
				<Wrapper>
					{this.state.friends
						.map(friend => (
							<div key={friend.id} onClick={() => this.handleClick(friend.id)}>
								<FriendCard
									removeFriend={this.removeFriend}
									id={friend.id}
									key={friend.id}
									image={friend.image}
								/>
							</div>
						))
						.sort(function() {
							return 0.5 - Math.random();
						})}
				</Wrapper>
			</div>
		);
	}
}

export default App;
