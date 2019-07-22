import React from 'react'

const SushiWallet = ({handleClick, toggleForm}) => {
  return (
    <form onSubmit={handleClick}>
      <input type='number' placeholder='Amount'/>
      <button>Add</button>
      <button onClick={toggleForm}>Cancel</button>
    </form>
  )
}

export default SushiWallet