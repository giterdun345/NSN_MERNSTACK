import React, {useEffect, useState} from 'react'
import LoadingPlane from '../LoadingPlane'
import NSNList from './NSNList'
import ServerError from '../ServerError'

const RandomLayout = () => {
  const [loading, setLoading] = useState(false)
  const [randomNsn, setRandomNsn] = useState()
  const [displayError, setDisplayError] = useState(false)
  const [errorMessage, setErrorMessage] = useState()

  const fetchRandom = ()=> {
    // fetches 15 random nsn from database 
      setLoading(true)
      fetch('/random_list')
      .then(res => res.json())
      .then(data => {
        if(data.length === undefined){
          // if the data returns a single object not array
          setErrorMessage(data)
          setDisplayError(true)
          setRandomNsn()
          throw new Error("Error in fetchRandom")
        }else{
          setRandomNsn(data)
          setLoading(false)
          setDisplayError(false)
          setErrorMessage()
        }
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }

  useEffect(()=>{
    fetchRandom()
  }, [])

  return ( 
    <div className='random-list'>
      <h1>Random List of 15 NSNs</h1>
      {/* if it is loading show plane else if there is an error show error, else show the list of NSN  */}
      {loading ? <LoadingPlane /> : displayError ? <ServerError error={errorMessage} /> : <NSNList randomNsn={randomNsn} />}
    </div>
   );
}
 
export default RandomLayout;