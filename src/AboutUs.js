import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import chicago from './assets/chicago.png';

const AboutUsSection = ({ loggedIn, blogs }) => {
    return (
        <div className="aboutUsSection">
            <div className="aboutUsText">
                <div>
                    <div className='aboutUsTitle'>
                        {blogs[5].title}
                    </div>
                    <br />
                    <div className='textAbout'>
                        {blogs[5].body}
                    </div>
                    {
                        loggedIn === true ?

                            <Link className="adminEditLink" to={`/blogss/${5}`}>
                                Edit
                            </Link>
                            : null
                    }
                </div>

                <div className='width100'>
                    <div className='lineAbout'>

                    </div>
                    <div className='plus465Clients'>
                        <div className="bolded465">
                            465
                        </div>
                        satisfied clients
                        <span style={{ width: '8%' }}></span>
                        <div className="bolded465">
                            1k+
                        </div>
                        documents to date
                    </div>
                </div>

            </div>
            <div className="aboutUsPhoto">
                <img src={chicago} alt="chicago-town" />
                <div className="textChicagoOffice"> Chicago Office</div>
            </div>
        </div>
    );
}

export default AboutUsSection;