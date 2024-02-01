import { useState } from 'react';
import minus from './assets/Minus.svg';
import plus from './assets/Plus.svg';

const Questions = () => {
    const [firstQuestion, SetFirstQuestion] = useState(false);
    const [secondQuestion, SetSecondQuestion] = useState(false);
    const [thirdQuestion, SetThirdQuestion] = useState(false);
    const [fourthQuestion, SetFourthQuestion] = useState(false);
    const [fifthQuestion, SetFifthQuestion] = useState(false);

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
                        Call Now
                    </div>
                </div>
            </div>
            <div className="rightSideQuestions">
                <div className='spaceBetween'>
                    <div className="firstQ">
                        What is the role of a notary public in the notarization process?
                    </div>
                    <div className='alignCenter'>
                        {
                            firstQuestion ?
                                <img src={minus} alt="minus" onClick={() => handleClick(1)} className='roundWhite' /> :
                                <img src={plus} alt="plus" onClick={() => handleClick(1)} className='roundWhite' />
                        }
                    </div>
                </div>
                {firstQuestion ?
                    <div className='firstQ smallAdditionalText'>
                        A notary public plays a crucial role in the notarization process by acting as an impartial witness. Their primary responsibilities include verifying the identity of the document signers, ensuring their willingness to sign the document, and certifying the authenticity of the signatures. Additionally, notaries administer oaths and affirmations, certify copies of documents, and may also witness the signing of affidavits, powers of attorney, and other legal documents. The notary's official seal and signature lend credibility to the notarized documents, confirming their validity and authenticity.
                        This process helps prevent fraud and ensures that the documents are legally binding.
                    </div>
                    : null}

                <div className='heigh1brown'></div>

                <div className="spaceBetween">
                    <div className="firstQ">
                        How does apostille authentication differ from traditional notarization?
                    </div>
                    <div className='alignCenter'>
                        {
                            secondQuestion ?
                                <img src={minus} alt="minus" onClick={() => handleClick(2)} className='roundWhite' /> :
                                <img src={plus} alt="plus" onClick={() => handleClick(2)} className='roundWhite' />
                        }
                    </div>
                </div>
                {secondQuestion ?
                    <div className='firstQ smallAdditionalText'>
                        Apostille authentication differs from traditional notarization in that it is specifically intended for use in countries that are part of the Hague Apostille Convention. While traditional notarization involves the verification of the authenticity of a document by a notary public, apostille authentication is a simplified certification process that verifies the authenticity of the seals and signatures of officials on public documents for international use. Apostille certification is recognized across member countries, eliminating the need for further legalization or embassy authentication. In contrast, traditional notarization is more broadly focused on verifying the identity and willingness of document signers and ensuring the
                        authenticity of their signatures, with its scope not limited to international use.
                    </div>
                    : null}
                <div className='heigh1brown'></div>
                <div className="spaceBetween">
                    <div className="firstQ">
                        Can any document be notarized, or are there specific requirements?
                    </div>
                    <div className='alignCenter'>
                        {
                            thirdQuestion ?
                                <img src={minus} alt="minus" onClick={() => handleClick(3)} className='roundWhite' /> :
                                <img src={plus} alt="plus" onClick={() => handleClick(3)} className='roundWhite' />
                        }
                    </div>
                </div>
                {thirdQuestion ?
                    <div className='firstQ smallAdditionalText'>
                        Not all documents can be notarized, and there are specific requirements that must be met for a document to be eligible for notarization. Notarization is typically reserved for documents that require an impartial witness to attest to the signing parties' identities, willingness to sign, and the accuracy of the document's contents. For a document to be notarized, it must be signed in the physical presence of the notary public, who will then complete the notarial certificate. Additionally, the document must not violate any laws, and the signers must have the mental capacity to understand the nature of the document and their actions. Documents such as wills, certain vital records, and documents with incomplete information may not be notarized,
                        while some jurisdictions may have specific requirements for the types of documents that can be notarized.
                    </div>
                    : null}
                <div className='heigh1brown'></div>
                <div className="spaceBetween">
                    <div className="firstQ">
                        Which countries are part of the Hague Apostille Convention?
                    </div>
                    <div className="alignCenter">
                        {
                            fourthQuestion ?
                                <img src={minus} alt="minus" onClick={() => handleClick(4)} className='roundWhite' /> :
                                <img src={plus} alt="plus" onClick={() => handleClick(4)} className='roundWhite' />
                        }
                    </div>
                </div>
                {fourthQuestion ?
                    <div className='firstQ smallAdditionalText column'>
                        <div>
                            The Hague Apostille Convention, also known as the Apostille Treaty, currently has 118 member countries.
                            Some of the notable member countries include:
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
                        What is the process for obtaining an apostille for a document intended for international use?
                    </div>
                    <div className='alignCenter'>
                        {
                            fifthQuestion ?
                                <img src={minus} alt="minus" onClick={() => handleClick(5)} className='roundWhite' /> :
                                <img src={plus} alt="plus" onClick={() => handleClick(5)} className='roundWhite' />
                        }
                    </div>
                </div>
                {fifthQuestion ?
                    <div className='firstQ smallAdditionalText column'>
                        <div>
                            The process for obtaining an apostille for a document intended for international use typically involves the following steps:
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