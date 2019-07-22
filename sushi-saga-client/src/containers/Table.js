import React, { Fragment, useState } from 'react'
import Button from '../components/Button'
import SushiWallet from '../components/SushiWallet'

const Table = ({eaten, money, addMoney}) => {
  const [showForm, setShowForm] = useState(false);
  const [addAmount, setAddAmount] = useState(0);

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" key={index} style={{ top: -7 * index }}/>
    })
  }

  const toggleForm = () => {
    setShowForm(!showForm);
    setAddAmount(0);
  }

  const updateAmount = (event) => {
    setAddAmount(parseInt(event.target.value, 10));
  }

  const handleClick = event => {
    event.preventDefault();
    addMoney(addAmount);
    toggleForm();
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ money } remaining!
        {showForm ? 
            <SushiWallet addAmount={addAmount} handleClick={handleClick} toggleForm={toggleForm} updateAmount={updateAmount}/>
          : 
            <Button handleClick={toggleForm} text='Add Money'/>
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
            renderPlates(eaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table