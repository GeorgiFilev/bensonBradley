import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import leftArr from './assets/CaretLeft.svg';
import rightArr from './assets/CaretRight.svg';
import quotes from './assets/quotes.svg';
import star from './assets/Star.svg';

const ClientVoicesSatisfaction = ({ clientVoices }) => {

    console.log(clientVoices);
    return (
        <div className='clientVoicesSection'>
            <div className="clientVoicesHeader">
                <div className="headerClientVoices">
                    client voices of satisfaction
                </div>
                <div className="arrowsNextPrev">
                    <img src={leftArr} alt="arrLeft" />
                    <img src={rightArr} alt="arrRight" />
                </div>
            </div>

            <div className="blog-list">
                {clientVoices.map((voice) => (
                    <div className='blog-preview spaceBetween column' key={voice.id}>
                        <div>
                            <div className='spaceBetween'>
                                <div className='starsSatisfaction'>
                                    {
                                        Array.from({ length: voice.stars }, (_, index) => (
                                            <img key={index} src={star} alt="stars" />
                                        ))
                                    }
                                </div>
                                <div className='quotes'>
                                    <img src={quotes} alt="quotes" />
                                </div>
                            </div>
                            <p className='textClient'>{voice.message}</p>
                        </div>
                        <div>
                            <hr className='hrline' />
                            <p className='namesVoice'>{voice.name}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='twoButtonsClientSatisfaction'>

                <Link to='/' className="twoButtns googleReviews text-decNone">
                    Google Reviews
                </Link>


                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0YkZpH3UiD_NLyOuPFBoNFpm5hdORQ9yV9K0ckl5YvRde0wNvU4ogh9zq5ZQ7MR7yI1AYKHrEh" className="twoButtns scheduleConsultation text-decNone">
                    Schedule Consultation
                </a>

            </div>
        </div>
    );
}

export default ClientVoicesSatisfaction;