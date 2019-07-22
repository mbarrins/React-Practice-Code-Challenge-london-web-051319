import React, { Fragment } from 'react'
import Button from '../components/Button'
import SushiWallet from '../components/SushiWallet'

class Table extends React.Component {
  state = {
    showForm: false,
    addAmount: 0
  }

  renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" key={index} style={{ top: -7 * index }}/>
    })
  }

  toggleForm = () => {
    this.setState({showForm: !this.state.showForm, addAmount: 0})
  }

  updateAmount = (event) => {
    this.setState({addAmount: parseInt(event.target.value, 10)});
  }

  handleClick = event => {
    event.preventDefault();
    this.props.addMoney(this.state.addAmount);
    this.setState({showForm: false, addAmount: 0})
  }

  render() {
    const {eaten, money} = this.props

    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${ money } remaining!
          {this.state.showForm ? 
              <SushiWallet addAmount={this.state.addAmount} handleClick={this.handleClick} toggleForm={this.toggleForm} updateAmount={this.updateAmount}/>
            : 
              <Button handleClick={this.toggleForm} text='Add Money'/>
            }
        </h1>
        <div className="table">
          <div className="stack">
            {
              /* 
                renderPlates takes an array 
                and renders an empty plate
                for every element in the array
              */
              this.renderPlates(eaten)
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Table