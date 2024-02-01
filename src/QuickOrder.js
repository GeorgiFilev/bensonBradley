import { useState } from "react";
import law from './assets/Law.svg';
import feather from './assets/Feather.svg';
import feather2 from './assets/Feather2.svg';

const QuickOrder = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNUmber] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [file, setFile] = useState('');



    return (
        <div className="quickOrderSection">
            <div className="leftOrder">
                <img className="goRight" src={feather} alt="feather" />
                <img src={feather2} alt="feather2" />
            </div>
            <div className="centerOrder">
                <div >
                    <div className="quickOrderHeader">
                        Quick Order: Notary Services
                    </div>

                    <div className="subHeaderFillOut">
                        Fill Out to Get Started
                    </div>
                </div>
                <div className="formOrder">
                    <form
                        action=""
                        method="post"
                        className="formQuickOrder"
                    >
                        <div className="column inputLine">
                            <label htmlFor=""> Name</label>
                            <input
                                className="orderInputField"
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="column inputLine">
                            <label htmlFor=""> Email</label>
                            <input
                                className="orderInputField"
                                type="text"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="row flex gap10betweenOrder">
                            <div className="flex column width50percent">
                                <label htmlFor=""> Country</label>
                                <select className="orderSelectField" value={country} onChange={(e) => setCountry(e.target.value)}>
                                    <option value="Albania">Albania</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Cape Verde">Cape Verde</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China, People's Republic of">China, People's Republic of (Including Hong Kong & Macao Special Administrative Regions)</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Korea, Republic of">Korea, Republic of</option>
                                    <option value="Kosovo">Kosovo</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Moldova, Republic of">Moldova, Republic of</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niue">Niue</option>
                                    <option value="North Macedonia, Republic of">North Macedonia, Republic of</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russian Federation">Russian Federation</option>
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option value="Saint Lucia">Saint Lucia</option>
                                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Swaziland">Swaziland</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Kingdom of Great Britain and Northern Ireland">United Kingdom of Great Britain and Northern Ireland</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Venezuela">Venezuela</option>
                                </select>
                            </div>
                            <div className="flex column width50percent">
                                <label htmlFor=""> Phone Number</label>
                                <input
                                    className="orderSelectField"
                                    type="text"
                                    required
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNUmber(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row flex gap10betweenOrder">
                            <div className="flex column width50percent">
                                <label htmlFor=""> Service Type</label>
                                <select className="orderSelectField" value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
                                    <option value="Albania">Option1</option>
                                    <option value="Andorra">opt2</option>
                                    <option value="Antigua and Barbuda">opt 3</option>
                                    <option value="Argentina">opt4</option>
                                </select>
                            </div>
                            <div className="flex column width50percent">
                                <label htmlFor=""> Document Type</label>
                                <select className="orderSelectField" value={documentType} onChange={(e) => setDocumentType(e.target.value)}>
                                    <option value="Albania">Option1</option>
                                    <option value="Andorra">opt2</option>
                                    <option value="Antigua and Barbuda">opt 3</option>
                                    <option value="Argentina">opt4</option>
                                </select>
                            </div>
                        </div>

                        <div className="greyFileUpload">
                            <div className="leftSideDrag">
                                <div className="dragDropText">
                                    Drag & Drop file or Upload
                                </div>
                                <div style={{ height: '16px', width: '100%' }}></div>
                                <div className="acceptableFiles">
                                    Accepted file types: JPEG, PNG, DOC, PDF
                                </div>
                            </div>
                            <div className="rightSideDrag">
                                <div className="buttonUpload">
                                    Upload
                                </div>
                            </div>
                        </div>
                        <div className="submit">
                            Submit
                        </div>
                        <div className="byClickingAgree">
                            By clicking “Submit” button you agree to the
                        </div>

                    </form>
                </div>
            </div>
            <div className="rightOrder">
                <img className="width100" src={law} alt="law" />
            </div>
        </div>
    );
}

export default QuickOrder;