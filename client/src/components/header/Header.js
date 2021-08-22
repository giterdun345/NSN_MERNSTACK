import Search from './Search'

const Header = () => {
  return ( 
    <>
      <header className="header">
        <div className='logo pull-left'>
          <a href="https://aerobasegroup.com">
            <img src="https://aerobasegroup.com/public/images/xlogo.png.pagespeed.ic.bzagu1WTAC.webp" className="logoimg" alt="AeroBase Group, Inc."/>
          </a>
        </div>
        <div className="main_nav">
          <div className="pull-right">
            <i className="fa fa-phone" />&nbsp;&nbsp;321-802-5889&nbsp;&nbsp;&nbsp;
            <i className="fa fa-fax" />&nbsp;&nbsp;321-733-7477
          </div>
          <Search />
        </div>
      </header>
      <div className='header_nav'></div>
      <div className='breadcrumbs-container'></div>	
    </>
   );
}
 
export default Header;