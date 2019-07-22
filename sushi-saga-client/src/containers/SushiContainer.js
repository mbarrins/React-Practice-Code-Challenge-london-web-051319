import React, { Fragment } from 'react'
import Button from '../components/Button'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, eaten, moreButton, eatSushi}) => {
  return (
    <Fragment>
      <div className="belt">
        {
          sushis.map(sushi => <Sushi key={sushi.id} {...sushi} eaten={eaten.includes(sushi.id)} handleClick={() => eatSushi(sushi.id)}/>)
        }
        <Button {...moreButton}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer