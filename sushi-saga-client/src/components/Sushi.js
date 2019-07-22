import React from 'react'

const Sushi = ({id, name, img_url, price, eaten, handleClick}) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleClick}>
        { 
          eaten ?
            null
          :
            <img src={img_url} alt={`sushi-${name}`} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {id} - {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi