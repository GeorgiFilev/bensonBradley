import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import leftArr from './assets/CaretLeft.svg';
import rightArr from './assets/CaretRight.svg';
import leftArrBlack from './assets/CaretLeftBlack.svg';
import rightArrGrey from './assets/CaretRightGrey.svg';
import quotes from './assets/quotes.svg';
import star from './assets/Star.svg';
import { useState } from 'react';

const ClientVoicesSatisfaction = ({ clientVoices }) => {


    const [activeArrow, setActiveArrow] = useState('left');
    const handleCLick = (which) => {
        if (which === 'left') {
            setActiveArrow('right');
        }
        if (which === 'right') {
            setActiveArrow('left');
        }
    }

    const filteredVoices = activeArrow === 'right' ? clientVoices.slice(0, 3) : clientVoices.slice(3, 6);


    console.log(clientVoices);
    return (
        <div className='clientVoicesSection'>
            <div className="clientVoicesHeader">
                <div className="headerClientVoices">
                    client voices of satisfaction
                </div>
                {
                    activeArrow == 'right' ?
                        <div className="arrowsNextPrev">
                            <img src={leftArr} alt="arrLeft" className='activeArrow' onClick={() => handleCLick('left')} />
                            <img src={rightArr} alt="arrRight" className='activeArrow' onClick={() => handleCLick('right')} />
                        </div> :
                        <div className="arrowsNextPrev">
                            <img src={leftArrBlack} alt="arrLeft" className='activeArrow' onClick={() => handleCLick('left')} />
                            <img src={rightArrGrey} alt="arrRight" className='activeArrow' onClick={() => handleCLick('right')} />
                        </div>
                }
            </div>

            <div className="blog-list">
                {filteredVoices.map((voice) => (
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

                <a href='https://www.google.com/search?sca_esv=5cded6f1e83ac200&q=benson+bradley+signing+service&uds=AMwkrPvNdabp0wl-S3yZISHqOFOzN6RsXZKXPoZdx4d-EB3mEeEwi9LZJi1KSEwVLSBBbYxyznesP96tR3mzKPHNXqaUrvOyshDS1QSuYgwDp-GGN_CNrqn05V23HoMHl_La1SWhW_QjPAg97u329tKTd-0TbsqJXQ&si=AKbGX_rcuucMgom2rba1cdwsvM2SVoIkP2btyqGMV4t0GuHIs4sGV_1tpuqR0YHG4Rzd9ScwcdAQzj5AigsGjHN8FP9iAONG4AVmx4ZtIvG1DSQSUAEQP3g%3D&sa=X&ved=2ahUKEwi_zeCW8JaEAxWqR_EDHavFDXoQ3PALegQIExAE&biw=1705&bih=887&dpr=1' className="twoButtns googleReviews text-decNone">
                    Google Reviews
                </a>


                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0YkZpH3UiD_NLyOuPFBoNFpm5hdORQ9yV9K0ckl5YvRde0wNvU4ogh9zq5ZQ7MR7yI1AYKHrEh" className="twoButtns scheduleConsultation text-decNone">
                    Schedule Consultation
                </a>

            </div>
        </div>
    );
}

export default ClientVoicesSatisfaction;