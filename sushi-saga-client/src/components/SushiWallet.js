import React from 'react'

const SushiWallet = ({handleClick, toggleForm, addAmount, updateAmount}) => {
  return (
    <form onSubmit={handleClick}>
      <input type='number' placeholder='Amount' value={addAmount===0 ? '' : addAmount} onChange={updateAmount}/>
      <button type='submit'>Add</button>
      <button type='cancel' onClick={toggleForm}>Cancel</button>
    </form>
  )
}

export default SushiWallet