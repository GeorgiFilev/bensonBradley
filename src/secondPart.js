import svg from './assets/fi_5679332.svg'
import svg2 from './assets/fi_2.svg';
import svg3 from './assets/fi_3.svg';
import arrow from './assets/right-arrow.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const SecondPart = ({ loggedIn, blogs }) => {
    return (
        <div className="secondSection">
            <div className="threeCards">
                <div>
                    <img src={svg} alt="icon-list" />
                </div>
                <div className='secondSectionHeader'>
                    {blogs[2].title}
                </div>
                <div>
                    {blogs[2].body}
                </div>
                {
                    loggedIn === true ?

                        <Link className="adminEditLink" to={`/blogss/${2}`}>
                            Edit
                        </Link>
                        : null
                }
                <div className='rowOnCard'>

                    <span className='requestQuote'>
                        <a href="/home#quickOrderSection" className='text-decNone black'>
                            Request quote
                        </a>
                    </span>
                    <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0YkZpH3UiD_NLyOuPFBoNFpm5hdORQ9yV9K0ckl5YvRde0wNvU4ogh9zq5ZQ7MR7yI1AYKHrEh" className='text-decNone'>
                        <span className='getConsultation'>
                            Get consultation
                            <img src={arrow} alt="arrow-right" />
                        </span>
                    </a>

                </div>
            </div>
            <div className="threeCards">
                <div>
                    <img src={svg2} alt='pencil' />
                </div>
                <div className='secondSectionHeader'>
                    {blogs[3].title}
                </div>
                <div>
                    {blogs[3].body}
                </div>
                {
                    loggedIn === true ?

                        <Link className="adminEditLink" to={`/blogss/${3}`}>
                            Edit
                        </Link>
                        : null
                }
                <div className='rowOnCard'>
                    <span className='requestQuote'>
                        <a href="/home#quickOrderSection" className='text-decNone black'>
                            Request quote
                        </a>
                    </span>
                    <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0YkZpH3UiD_NLyOuPFBoNFpm5hdORQ9yV9K0ckl5YvRde0wNvU4ogh9zq5ZQ7MR7yI1AYKHrEh" className='text-decNone'>
                        <span className='getConsultation'>
                            Get consultation
                            <img src={arrow} alt="arrow-right" />
                        </span>
                    </a>
                </div>
            </div>
            <div className="threeCards">
                <div>
                    <img src={svg3} alt="thumbnail" />
                </div>
                <div className='secondSectionHeader'>
                    {blogs[4].title}
                </div>
                <div>
                    {blogs[4].body}
                </div>
                {
                    loggedIn === true ?

                        <Link className="adminEditLink" to={`/blogss/${4}`}>
                            Edit
                        </Link>
                        : null
                }
                <div className='rowOnCard'>
                    <span className='requestQuote'>
                        <a href="/home#quickOrderSection" className='text-decNone black'>
                            Request quote
                        </a>
                    </span>

                    <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0YkZpH3UiD_NLyOuPFBoNFpm5hdORQ9yV9K0ckl5YvRde0wNvU4ogh9zq5ZQ7MR7yI1AYKHrEh" className='text-decNone'>
                        <span className='getConsultation'>
                            Get consultation
                            <img src={arrow} alt="arrow-right" />
                        </span>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default SecondPart;