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

// ===================use this code
// import React, { Component } from "react";

// const initialState = {
//   tiles: [
//     {
//       color: '#000',
//       clicked: false,
//       id: 0,
//     },
//     {
//       color: '#111',
//       clicked: false,
//       id: 1,
//     },
//     {
//       color: '#222',
//       clicked: false,
//       id: 2,
//     },
//   ],
//   score: 0,
//   topScore: 0,
// }

// class Game extends Component {
//   constructor(props) {
//     super(props)
//     this.state = initialState
//   }

//   resetGame = () => {
//     const tiles = this.state.tiles.map(tile => ({ ...tile, clicked: false }))
//     console.log('TILES', tiles)
//     this.setState({ score: 0, tiles })
//     console.log('NEW STATE', this.state)
//   }

//   handleClick = id => {
//     let clickedTile = this.state.tiles.find(tile => tile.id === id)

//     if (clickedTile.clicked) {
//       this.resetGame()
//     } else {
//       clickedTile.clicked = true
//       let newTiles = this.state.tiles.filter(tile => tile.id !== id)
//       newTiles.push(clickedTile)
//       console.log('NEW TILES', newTiles)

//       this.setState({
//         ...this.state,
//         score: this.state.score + 1,
//         topScore: this.state.score === this.state.topScore
//           ? this.state.topScore + 1
//           : this.state.topScore,
//         tiles: newTiles
//       })
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>Score: { this.state.score }</h1>
//         <h1>Top Score: { this.state.topScore }</h1>
//         {
//           this.state.tiles.map(tile => ( // TODO: Shuffle these around! Hint: .sort()
//             <div
//               key={ tile.id }
//               style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 width: 100,
//                 height: 100,
//                 margin: '1em',
//                 backgroundColor: tile.color,
//                 color: '#fff',
//               }}
//               onClick={ () => this.handleClick(tile.id) }
//             >
//               CARD { tile.clicked ? 'clicked' : null }
//             </div>
//           ))
//         }
//       </div>
//     );
//   }
// }

// export default Game;
// ==============================
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
