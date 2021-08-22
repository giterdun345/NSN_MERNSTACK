import { Link } from 'react-router-dom'

const ServerError = ({error}) => {
  return ( 
    <div>
      <h2>Error</h2>
      <h3>Sorry, there is an error with the server:</h3>
      <h4>{error.code}</h4>
      <p>{error.message}</p> 
      <Link to="/">Try Again</Link>
    </div>
   );
}
 
export default ServerError;