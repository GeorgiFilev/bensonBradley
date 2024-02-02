import phone from './assets/Phone.svg';
import { Link } from 'react-router-dom';
import logo from './assets/nav-logo.png';
const Navbar = () => {

    return (
        <nav className="navbar">
            <div className='flexNavbar'>
                <img src={phone} alt="phone-icon" />
                <div className='callNowHeader'> Call now</div>
                <h1 className='redColor'>Call now: +1 312-952-9877</h1>
            </div>
            <div className='logo'>
                <Link to="/">
                    <img className='logoLink' src={logo} alt="logo-name" />
                </Link>
            </div>

            <div className="links">
                <a className="borderR32" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0YkZpH3UiD_NLyOuPFBoNFpm5hdORQ9yV9K0ckl5YvRde0wNvU4ogh9zq5ZQ7MR7yI1AYKHrEh" >
                    Make an appointment
                </a>
            </div>
            <div className="orderNavbar">
                <Link className="borderR32" to="/create" >
                    Order
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;