import map from './assets/map.png';
import { Link } from 'react-router-dom';

const MapSection = () => {
    return (
        <div className="mapSection">
            <div className='leftMap'>
                <img src={map} alt="map_of_the_world" />
            </div>
            <div className='rightMap'>
                <div className='mapTitle'>
                    Global Authentication with Hague Convention Apostille
                </div>
                <div className='textMap'>
                    Need international recognition for your documents? Our Hague Convention Apostille services ensure your documents are legally recognized in all member
                    countries. We handle the certification process, making international transactions smooth and reliable.
                </div>
                <span className='height40px width100'>

                </span>
                <div className='links'>
                    <Link to="/" className="borderR32 text-decNone">
                        Get Apostile Services
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MapSection;