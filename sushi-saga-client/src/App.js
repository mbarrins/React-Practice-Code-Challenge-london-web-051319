import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
const PER_PAGE = 4

class App extends Component {
  state = {
    wallet: 100,
    page: 0,
    sushi: [],
    eaten: []
  }
  
  componentDidMount = () => {
    // this.getSushi();
    this.getAllSushi();
  }

  // getSushi = () => {
  //   return fetch(`${API}?_page=${this.state.page}&_limit=${PER_PAGE}`)
  //   .then(resp => {
  //     this.setState({page: this.state.page + 1})  
  //     return resp.json()
  //   }).then(sushi => this.setState({sushi: [...this.state.sushi, ...sushi]}))
  // }

  getAllSushi = () => {
    return fetch(API).then(resp => resp.json())
      .then(sushi => this.setState({sushi}))
  }

  eatSushi = (sushi_id) => {
    this.state.wallet - this.state.sushi.find(sushi => sushi.id === sushi_id).price >= 0 ?  this.setState({
        eaten: [...this.state.eaten, sushi_id],
        wallet: this.state.wallet - this.state.sushi.find(sushi => sushi.id === sushi_id).price
      }) : alert('You do not have enough money to buy that sushi.')
  }

  // moneySpent = () => {
  //   return this.state.sushi.reduce((total, sushi) => {
  //     return total + (this.state.eaten.includes(sushi.id) ? sushi.price : 0)
  //   }, 0)
  // }

  // remainingMoney = () => {
  //   return this.state.budget - this.moneySpent();
  // }

  displaySushi = () => {
    return this.state.sushi.slice(this.state.page * 4, (this.state.page * 4) + 4)
  }

  moreSushi = () => {
    const page = (((this.state.page + 1) * 4) + 4) > this.state.sushi.length ?
                    0 : this.state.page + 1
    this.setState({ page })
  }

  addMoney = (amount) => {
    this.setState({wallet: this.state.wallet + amount})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushis={this.displaySushi()} eaten={this.state.eaten} moreButton={{handleClick: this.moreSushi, text: 'More sushi!'}} eatSushi={this.eatSushi}/>
        <Table eaten={this.state.eaten} money={this.state.wallet} walletButton={{handleClick: this.moreSushi, text: 'Add Money'}}/>
      </div>
    );
  }
}

export default App;