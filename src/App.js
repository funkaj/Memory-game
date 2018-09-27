import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  createStructure = friends => {
    function createSignsArr(friends) {
      const signs = []
      console.log(signs)
      for (let i = 1; i <= friends / 2; i++) {
        signs.push(i, i)
      }
      return signs
    }
  
    const signsDouble = createSignsArr(friends)
  
    const container = document.createElement('div')   
    container.setAttribute('className', 'container')
    document.body.appendChild(container)
    for (let i = 0; i < friends; i++) {
      let div = document.createElement('div')
      div.setAttribute('className', 'tile')
      div.setAttribute('id', `tile${i}`)
      let randomNum = Math.floor(Math.random() * signsDouble.length)
      let tile = signsDouble.splice(randomNum, 1)[0]
      div.innerHTML = tile
      container.appendChild(div)
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <PrimarySearchAppBar />
        <Title>Clicky-Hawks</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            picked={friend.picked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
