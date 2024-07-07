import React,{ useEffect, useState } from 'react'
import './CharacterComponent.css'
import axios from 'axios'
import CharacterComponents from '../CharacterComponents/CharacterComponents'
import {useQuery} from 'react-query'

const CharacterComponent = () => {
  // const [charData, setCharData] = useState([])
  const [pgNo, setPgNo] = useState(1)


  const getCharData = async({queryKey}) =>{
     const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`)
    // const response = await axios.get(`https://rickandmortyapi.com/api/character`)
    console.log(queryKey)
    return response.data
    // console.log(response.data)
    // setCharData(response.data)
  }

  const {data, isPreviousData, isLoading, isError} = useQuery(['characters',pgNo], getCharData ,
  {
    keepPreviousData : true
  })
  // if status === 'loading'
  if(isLoading)
  {
    return <div>Loading...</div>
  }
  // if status === 'error'
  if(isError)
  {
    return <div>Error</div>
  }

  // useEffect(() =>{
  //     getCharData()
  //   },[pgNo])

  const renderPrevButton = () =>{
    setPgNo((oldPgNo) => oldPgNo-1)
  }

  const renderNextButton = () =>{
    setPgNo((oldPgNo) => oldPgNo+1)
  }
  return (
    <React.Fragment>
      <h1 className='white-text' id='main-heading'>Rick and Morty</h1>
      <div className='char-info-container'>
        {data.results && data.results.map((iterator) => (
          <CharacterComponents key={iterator.id}  iterator={iterator}/>
        ))}
      </div>  
      <button 
      disabled = {pgNo === 1} 
      onClick={renderPrevButton}>Prev</button>
      <button 
      disabled = {isPreviousData || !data.info.next} 
      onClick={renderNextButton}>Next</button>
    </React.Fragment>
  )
}

export default CharacterComponent