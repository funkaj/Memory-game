import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import friends from "./friends.json";
import "./App.css";
import { Typography } from "@material-ui/core";

const state = {
      friends,
      score: 0,
      topScore: 0
    };
class App extends Component {
  // Setting this.state.friends to the friends json array
  constructor(props) {
    super(props);
    this.state = state;
  };
// reset board and score for new game
  resetGame = () => {

    const friends = this.state.friends.map(friend => ({ ...friend, clicked: false }));
    this.setState({ score: 0, friends });
   
  };

// handle the click element 
  handleClick = id => {

    let clickedfriend = this.state.friends.find(friend => friend.id === id);
    // if clicked is true end game and call resetGame
      if (clickedfriend.clicked) { this.resetGame() } 
      //else change clicked to true push to a new array 
      else {
      	clickedfriend.clicked = true;
      	let newfriends = this.state.friends.filter(friend => friend.id !== id);
		  newfriends.push(clickedfriend);
		  
      // then set the new state
      this.setState({
        ...this.state,
        score: this.state.score + 1,
        topScore: this.state.score === this.state.topScore
        ? this.state.topScore + 1
        : this.state.topScore,
        friends: newfriends
      });
    };
  };

// Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
          <PrimarySearchAppBar />
            <Wrapper>
              <Title>Silver-Hawks Memory</Title>
              <Typography variant='display2'>
                Score: { this.state.score }
              </Typography>

              <Typography variant='display2'>
                Top Score: { this.state.topScore }
              </Typography>  
            </Wrapper> 
          <Wrapper>
        {
          //place images from friends.json onto DOM
          this.state.friends.map(friend =>
            <div
            key={ friend.id }
            onClick={ () => this.handleClick(friend.id) }
            >
              <FriendCard
                removeFriend={this.removeFriend}
                id={friend.id}
                key={friend.id}
                image={friend.image}
                />
            </div>
            // and randomize the img placement on screen
        ).sort(function (){return 0.5 - Math.random()})} 
          </Wrapper>
        </div>
    );
  };
};

export default (App);
