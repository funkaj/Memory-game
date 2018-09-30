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
    super(props)
    this.state = state
  }   

  resetGame = () => {
    const friends = this.state.friends.map(friend => ({ ...friend, clicked: false }))
    console.log('friends', friends)
    this.setState({ score: 0, friends })
    console.log('NEW STATE', this.state)
  }

  handleClick = id => {
    let clickedfriend = this.state.friends.find(friend => friend.id === id)
      if (clickedfriend.clicked) { this.resetGame() } else {
      clickedfriend.clicked = true
      let newfriends = this.state.friends.filter(friend => friend.id !== id)
      newfriends.push(clickedfriend)
      console.log('NEW friends', newfriends)
      this.setState({
        ...this.state,
        score: this.state.score + 1,
        topScore: this.state.score === this.state.topScore
        ? this.state.topScore + 1
        : this.state.topScore,
        friends: newfriends
      })
    }
  }
// Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
          <PrimarySearchAppBar />
          <Wrapper>
          
          <Title>Clicky-Hawks</Title>
          <Typography>
          <h1>Score: { this.state.score }</h1>
          </Typography>
          
          <Typography>
          <h1>Top Score: { this.state.topScore }</h1>
          </Typography>  
        
          </Wrapper> 
          <Wrapper>
        {
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
        ).sort(function (){return 0.5 - Math.random()})}
          </Wrapper>
        </div>
    );
  }
}

export default App;
