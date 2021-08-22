import { useState } from 'react'
import { useHistory } from 'react-router-dom'
const Search = () => {
  const [inputError, setInputError] = useState()
  const [input, setInput] = useState()
  const history = useHistory()

  const validateNSN = (data)=>{
    // checks to see if the correct NSN number was input into search 
    let regex = /\d{4}-\d{2}-\d{3}-\d{4}|^\d{13}/g
    
    if(regex.test(data)){ 
      console.log(data)
      setInputError()
      return true
    }else{
      setInputError('Input NSN as 8415-00-782-2889 or 8415007822889')
      return false
    }
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    if(validateNSN(input)){
      // useHistory or Redirect 
      history.push(`/nsn/${input}`)
    }
  }

  window.onpopstate = (e)=> {
    // in order to use back button with forceRefresh on Router 
    window.location.reload();
  };

  return (
    <form  onSubmit={handleSubmit}>
      <ul className="list-plain list-search">
        <li>
          <input type="text" onChange={event => setInput(event.target.value)} className="pull-left input-md form-control input-abg" placeholder="Search using NSN..."/>
        </li>
        <li>
          <button type="submit" className="btn btn-md btn-abg pull-left">Search</button>
        </li>
      </ul>
      {inputError ? <span className='input-error'><span style={{color:'red', fontWeight:'bold'}}>Error </span>{inputError}</span> : undefined}
    </form>
  );
}
 
export default Search;