import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home'
import Smash from './pages/Smash'
// CSS
import './App.css';

let nouns = ['Mom', 'Dad', 'Dog', 'Person', 'Computer', 'Animal', 'Printer', 'Projector', 'Sleepingbag', 'Pillow', 'Speaker']
let adjectives = ['Full', 'Sleepy', 'Tired', 'Excited', 'Colorful', 'Noisy', 'Dark', 'Bright', 'High', 'Low']

let locations = ['Richmond, VA', 'Washington DC', 'Seattle, WA', 'New York, NY', 'Sacramento, CA', 'Denver, CO', 'St. Louis, MO', 'Ocean City, NJ']

let hotels = []

for(let i = 0; i < 50; i++) {
  hotels[i] = {}
  hotels[i].noun = nouns[Math.floor(Math.random()*nouns.length)];
  hotels[i].adjective = adjectives[Math.floor(Math.random()*adjectives.length)]
  hotels[i].name = hotels[i].adjective + ' ' + hotels[i].noun
  hotels[i].location = locations[Math.floor(Math.random()*locations.length)]
}

for(let i = 0; i < hotels.length; i++) {
  let url = 'https://api.giphy.com/v1/gifs/search?api_key=AFwUQJ4kLcC8gjKCDVXH5QaSvjoTCHon&q=' + hotels[i].noun.toLowerCase()
  axios.get(url).then((response) => {
    let images = response.data.data
    if(images[0].images) {
      hotels[i].image = images[Math.floor(Math.random()*images.length)].images.fixed_width.url
    } else {
      hotels[i].image = "https://media.giphy.com/media/xT9IgIc0lryrxvqVGM/giphy.gif"
    }
  })
}

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hotels: hotels,
      currentIndex: 0,
      smashList: [],
      page: 0
    }
    this.nextHotel = this.nextHotel.bind(this)
    this.smash = this.smash.bind(this)
    this.pass = this.pass.bind(this)
  }
  nextHotel() {
    if(this.state.hotels[this.state.currentIndex + 1]) {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    } else {
      this.setState({ currentIndex: 0 });
    }
  }
  smash() {
    let tempSmashList = this.state.smashList
    tempSmashList.push(this.state.hotels[this.state.currentIndex])
    let tempHotels = this.state.hotels
    tempHotels.splice(this.state.currentIndex, 1)
    this.setState({ hotels: tempHotels, smashList: tempSmashList })
  }
  pass() {
    // let tempHotels = this.state.hotels
    // tempHotels.splice(this.state.currentIndex, 1)
    // this.setState({ hotels: tempHotels })
    this.nextHotel()
  }
  render() {
    let hotel = this.state.hotels[this.state.currentIndex]
    let home = () => {
      return <Home hotel={hotel} smash={this.smash} pass={this.pass}/>
    }
    let smash = () => {
      return <Smash smashList={this.state.smashList}/>
    }
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={home}/>
          <Route exact path="/smashlist" component={smash}/>
        </div>
      </Router>
    );
  }
}
