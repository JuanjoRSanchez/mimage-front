import { Link } from 'react-router-dom';
import './header.css';
import '../static/styles/buttons.css';


function Header() {
  return (
    <div className="header">
      <section className='header'>
        <div className='header_principal'>
          <div className='btn_box_header'>
            <Link className='link_header' to="" >HOME</Link>
            <Link className='link_header' to="signUp" >SIGN UP</Link>
            <Link className='link_header' to="login">LOGIN</Link>
          </div>
          <div className='user_box_header'>
           <ul>
              <li>User</li>
            </ul> 
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;

