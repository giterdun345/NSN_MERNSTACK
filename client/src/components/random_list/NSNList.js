const NSNList = ({randomNsn}) => {
  return (
    <ul>
      {randomNsn ? randomNsn.map(obj => {
        return (
          <li className='nsn-item' key={obj.nsn}>
            <a href={`/nsn/${obj.nsn}`} className='nsn-link'>
              NSN &nbsp;{obj.nsn}
            </a>
          </li>
        )
      })
        : undefined
      } 
    </ul>
 );
}
 
export de