import React, { Fragment } from 'react'
import Button from '../components/Button'

class Table extends React.Component {
  state = {
    showForm: false
  }

  renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" key={index} style={{ top: -7 * index }}/>
    })
  }

  toggleForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

  handleClick = event => {
    event.preventDefault();
    this.props.addMoney(parseInt(event.target[0].value, 10));
    this.setState({showForm: false}, event.target.reset())
  }

  render() {
    const {eaten, money} = this.props

    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${ money } remaining!
          {this.state.showForm ? 
              <form onSubmit={this.handleClick}>
                <input type='number' placeholder='Amount'/>
                <button>Add</button>
                <button onClick={this.toggleForm}>Cancel</button>
              </form>
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