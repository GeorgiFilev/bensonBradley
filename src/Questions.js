import { useState } from 'react';
import minus from './assets/Minus.svg';
import plus from './assets/Plus.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Questions = ({ loggedIn, blogs }) => {
    const [firstQuestion, SetFirstQuestion] = useState(false);
    const [secondQuestion, SetSecondQuestion] = useState(false);
    const [thirdQuestion, SetThirdQuestion] = useState(false);
    const [fourthQuestion, SetFourthQuestion] = useState(false);
    const [fifthQuestion, SetFifthQuestion] = useState(false);

    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);

    const handleClick = (questionN) => {
        switch (questionN) {
            case 1:
                SetFirstQuestion(!firstQuestion);
                break;
            case 2:
                SetSecondQuestion(!secondQuestion);
                break;
            case 3:
                SetThirdQuestion(!thirdQuestion);
                break;
            case 4:
                SetFourthQuestion(!fourthQuestion);
                break;
            case 5:
                SetFifthQuestion(!fifthQuestion);
                break;
        }
    }

    const handleCallNowClick = () => {
        window.location.href = "tel:+13129529877";
    };

    return (
        <div className="questionsSection">
            <div className="leftSideQuestions">
                <div className="titleQuestions">
                    Have Questions ?
                </div>
                <div className='bottomLeftQuestions'>
                    <div className='haveMoreQuestion'>
                        Have more questions? <br /> Call us
                    </div>
                    <br />
                    <div className='buttonCallNow'>
                        {
                            isMobileDevice ?
                                <span className='phoneRedirect' onClick={handleCallNowClick}>Call Now</span>
                                :
                                <a className='phoneRedirect' href="tel:+13129529877">Call Now</a>
                        }

                    </div>
                </div>
            </div>
            <div className="rightSideQuestions">
                <div className='spaceBetween'>
                    <div className="firstQ">
                        {blogs[27].title}
                    </div>
                    <div className='alignCenter'>
                        {
                            firstQuestion ?
                                <img src={minus} alt="minus" onClick={() => handleClick(1)} className='roundWhite' /> :
                                <img src={plus} alt="plus" onClick={() => handleClick(1)} className='roundWhite' />
                        }
                        {
                            loggedIn == true ?

                                <Link className="adminEditLink" to={`/blogss/${27}`}>
                                    Edit
                                </Link>
                                : null
                        }
                    </div>
                </div>
                {firstQuestion ?
                    <div className='firstQ smallAdditionalText'>
                        {blogs[27].body}
                    </div>
                    : null}

                <div className='heigh1brown'></div>

                <div className="spaceBetween">
                    <div className="firstQ">
                        {blogs[28].title}
                    </div>
                    <div className='alignCenter'>
                        {
                            secondQuestion ?
                                <img src={minus} alt="minus" onClick={() => handleClick(2)} className='roundWhite' /> :
                                <img src={plus} alt="plus" onClick={() => handleClick(2)} className='roundWhite' />
                        }
                        {
                            loggedIn == true ?

                                <Link className="adminEditLink" to={`/blogss/${28}`}>
                                    Edit
                                </Link>
                                : null
                        }
                    </div>
                </div>
                {secondQuestion ?
                    <div className='firstQ smallAdditionalText'>
                        {blogs[28].body}
                    </div>
                    : null}
                <div className='heigh1brown'></div>
                <div className="spaceBetween">
                    <div className="firstQ">
                        {blogs[29].title}
                    </div>
                    <div className='alignCenter'>
                        {
                            thirdQuestion ?
                                <img src={minus} alt="minus" onClick={() => handleClick(3)} className='roundWhite' /> :
                                <img src={plus} alt="plus" onClick={() => handleClick(3)} className='roundWhite' />
                        }
                        {
                            loggedIn == true ?

                                <Link className="adminEditLink" to={`/blogss/${29}`}>
                                    Edit
                                </Link>
                                : null
                        }
                    </div>
                </div>
                {thirdQuestion ?
                    <div className='firstQ smallAdditionalText'>
                        {blogs[29].body}
                    </div>
                    : null}
                <div className='heigh1brown'></div>
                <div className="spaceBetween">
                    <div className="firstQ">
                        {blogs[30].title}
                    </div>
                    <div className="alignCenter">
                        {
                            fourthQuestion ?
                                <img src={minus} alt="minus" onClick={() => handleClick(4)} className='roundWhite' /> :
                                <img src={plus} alt="plus" onClick={() => handleClick(4)} className='roundWhite' />
                        }
                        {
                            loggedIn == true ?

                                <Link className="adminEditLink" to={`/blogss/${30}`}>
                                    Edit
                                </Link>
                                : null
                        }
                    </div>
                </div>
                {fourthQuestion ?
                    <div className='firstQ smallAdditionalText column'>
                        <div>
                            {blogs[30].body}
                        </div>
                        <div className='fourthQuestionText'>
                            <ul className='width50percent'>
                                <li>Albania</li>
                                <li>Andorra</li>
                                <li>Antigua and Barbuda</li>
                                <li>Argentina</li>
                                <li>Armenia</li>
                                <li>Australia</li>
                                <li>Austria</li>
                                <li>Azerbaijan</li>
                                <li>Bahamas</li>
                                <li>Bahrain</li>
                                <li>Barbados</li>
                                <li>Belarus</li>
                                <li>Belgium</li>
                                <li>Belize</li>
                                <li>Bolivia</li>
                                <li>Bosnia and Herzegovina</li>
                                <li>Botswana</li>
                                <li>Brazil</li>
                                <li>Brunei Darussalam</li>
                                <li>Bulgaria</li>
                                <li>Burundi</li>
                                <li>Canada</li>
                                <li>Cape Verde</li>
                                <li>Chile</li>
                                <li>China, People's Republic of (Including Hong Kong & Macao Special Administrative Regions)</li>
                                <li>Colombia</li>
                                <li>Cook Islands</li>
                                <li>Costa Rica</li>
                                <li>Croatia</li>
                                <li>Cyprus</li>
                                <li>Czech Republic</li>
                                <li>Denmark</li>
                                <li>Dominica</li>
                                <li>Dominican Republic</li>
                                <li>Ecuador</li>
                                <li>El Salvador</li>
                                <li>Estonia</li>
                                <li>Fiji</li>
                                <li>Finland</li>
                                <li>France</li>
                                <li>Georgia</li>
                                <li>Germany</li>
                                <li>Greece</li>
                                <li>Grenada</li>
                                <li>Guatemala</li>
                                <li>Guyana</li>
                                <li>Honduras</li>
                                <li>Hungary</li>
                                <li>Iceland</li>
                                <li>India</li>
                                <li>Indonesia</li>
                                <li>Ireland</li>
                                <li>Israel</li>
                                <li>Italy</li>
                                <li>Japan</li>
                                <li>Jamaica</li>
                                <li>Kazakhstan</li>
                                <li>Korea, Republic of</li>
                                <li>Kosovo</li>
                                <li>Kyrgyzstan</li>
                                <li>Latvia</li>
                                <li>Lesotho</li>
                            </ul>
                            <ul className='width50percent'>
                                <li>Liberia</li>
                                <li>Liechtenstein</li>
                                <li>Lithuania</li>
                                <li>Luxembourg</li>
                                <li>Malawi</li>
                                <li>Malta</li>
                                <li>Marshall Islands</li>
                                <li>Mauritius</li>
                                <li>Mexico</li>
                                <li>Moldova, Republic of</li>
                                <li>Monaco</li>
                                <li>Mongolia</li>
                                <li>Montenegro</li>
                                <li>Morocco</li>
                                <li>Namibia</li>
                                <li>Netherlands</li>
                                <li>New Zealand</li>
                                <li>Nicaragua</li>
                                <li>Niue</li>
                                <li>North Macedonia, Republic of</li>
                                <li>Norway</li>
                                <li>Oman</li>
                                <li>Pakistan</li>
                                <li>Palau</li>
                                <li>Panama</li>
                                <li>Paraguay</li>
                                <li>Peru</li>
                                <li>Philippines</li>
                                <li>Poland</li>
                                <li>Portugal</li>
                                <li>Romania</li>
                                <li>Russian Federation</li>
                                <li>Saint Kitts and Nevis</li>
                                <li>Saint Lucia</li>
                                <li>Saint Vincent and the Grenadines</li>
                                <li>Samoa</li>
                                <li>San Marino</li>
                                <li>Sao Tome and Principe</li>
                                <li>Saudi Arabia</li>
                                <li>Senegal</li>
                                <li>Serbia</li>
                                <li>Seychelles</li>
                                <li>Singapore</li>
                                <li>Slovakia</li>
                                <li>Slovenia</li>
                                <li>South Africa</li>
                                <li>Spain</li>
                                <li>Suriname</li>
                                <li>Swaziland</li>
                                <li>Sweden</li>
                                <li>Switzerland</li>
                                <li>Tajikistan</li>
                                <li>Tonga</li>
                                <li>Trinidad and Tobago</li>
                                <li>Tunisia</li>
                                <li>Turkey</li>
                                <li>Ukraine</li>
                                <li>United Kingdom of Great Britain and Northern Ireland</li>
                                <li>Uruguay</li>
                                <li>Uzbekistan</li>
                                <li>Vanuatu</li>
                                <li>Venezuela</li>
                            </ul>
                        </div>
                        <div>
                            These countries have agreed to recognize apostille certificates issued by authorities in other member countries,
                            simplifying the process of authenticating public documents for international use.
                        </div>
                    </div>
                    : null}
                <div className='heigh1brown'></div>
                <div className='spaceBetween'>
                    <div className="firstQ">
                        {blogs[31].title}
                    </div>
                    <div className='alignCenter'>
                        {
                            fifthQuestion ?
                                <img src={minus} alt="minus" onClick={() => handleClick(5)} className='roundWhite' /> :
                                <img src={plus} alt="plus" onClick={() => handleClick(5)} className='roundWhite' />
                        }
                        {
                            loggedIn == true ?

                                <Link className="adminEditLink" to={`/blogss/${31}`}>
                                    Edit
                                </Link>
                                : null
                        }
                    </div>
                </div>
                {fifthQuestion ?
                    <div className='firstQ smallAdditionalText column'>
                        <div>
                            {blogs[31].body}
                        </div>
                        <div>
                            <ol>
                                <li>Identify the Competent Authority: Determine the designated Competent Authority in the country where the document was issued. This is usually a government department or agency responsible for issuing apostilles.</li>
                                <br />
                                <li>Prepare the Document: Ensure that the document is correctly executed, signed by the authorized individual, and contains any necessary notarization or certification.</li>
                                <br />
                                <li>Submit the Document: Present the document to the Competent Authority along with any required application forms and fees. Some countries may allow for electronic submission and processing.</li>
                                <br />
                                <li>Receive the Apostille: Once the document and application have been reviewed and approved, the Competent Authority will affix an apostille certificate or stamp to the document, verifying its authenticity and allowing it to be used in member countries of the Hague Apostille Convention.</li>
                                <br />
                                <li>Use the Document Internationally: With the apostille attached, the document is now recognized for international use and can be presented in any member country without the need for further legalization.</li>
                            </ol>
                        </div>
                    </div>
                    : null}


            </div>
        </div>
    );
}

export default Questions;