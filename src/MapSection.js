import map from './assets/map.png';
import { Link } from 'react-router-dom';

const MapSection = ({ loggedIn, blogs }) => {
    return (
        <div className="mapSection">
            <div className='leftMap'>
                <img src={map} alt="map_of_the_world" />
            </div>
            <div className='rightMap'>
                <div className='mapTitle'>
                    {blogs[6].title}
                </div>
                <div className='textMap'>
                    {blogs[6].body}
                </div>
                {
                    loggedIn === true ?

                        <Link className="adminEditLink" to={`/blogss/${6}`}>
                            Edit
                        </Link>
                        : null
                }
                <span className='height40px width100'>

                </span>
                <div className='links'>
                    <a href="#quickOrderSection" className="borderR32 text-decNone">
                        Get Apostile Services
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MapSection;