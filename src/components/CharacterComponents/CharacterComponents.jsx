import React from 'react'

const CharacterComponents = ({iterator}) => {
  return (
    <div className='char-info-box'>
                <img src={iterator.image} height='200px'/>
                <div className='char-info'>
                    <h2 className='white-text' id='char-name'>{iterator.name}</h2>
                    <p className='white-text'>{iterator.status} - {iterator.species}</p>
                    <p id='gray-text'>Last seen on</p>
                    <p className='white-text'>{iterator.location.name}</p>  
                </div>
              </div>


  )
}

export default CharacterComponents