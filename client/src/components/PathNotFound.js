import { Link } from 'react-router-dom'

const PathNotFound = () => {
  return ( 
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404"></div>
          <h1>404</h1>
          <h2>Oops! Page Is Not Found</h2>
          <p>Sorry but the page you are looking for does not exist, has been removed, name has changed or is temporarily unavailable</p>
          <Link to="/">Back to homepage</Link>
        </div>
	    </div>
   );
}
 
export default PathNotFound;