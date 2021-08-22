import { Link } from 'react-router-dom'

const NSNList = ({randomNsn}) => {
  return (
    <ul>
      {randomNsn ? randomNsn.map((obj, idx) => {
        return (
          <li className='nsn-item' key={obj.nsn}>
            <Link to={`/nsn/${obj.nsn}`} className='nsn-link' key={obj.nsn + idx}>
              NSN &nbsp;{obj.nsn}
            </Link>
          </li>
        )
      })
        : undefined
      } 
    </ul>
 );
}
 
export default NSNList;