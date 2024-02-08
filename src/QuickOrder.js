import { useState } from "react";
import law from './assets/Law.svg';
import feather from './assets/Feather.svg';
import feather2 from './assets/Feather2.svg';

const QuickOrder = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('Albania');
    const [phoneNumber, setPhoneNUmber] = useState('');
    const [serviceType, setServiceType] = useState('Birth Certificates');
    const [file, setFile] = useState('');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const formData = {
        //     name,
        //     email,
        //     country,
        //     phoneNumber,
        //     serviceType,
        //     file
        // };
        const formData = new FormData(); // Create FormData object
        formData.append('name', name);
        formData.append('email', email);
        formData.append('country', country);
        formData.append('phoneNumber', phoneNumber);
        formData.append('serviceType', serviceType);
        formData.append('file', file); // Append the entire file object

        window.location.href = 'https://square.link/u/5JRgYKiS';

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                body: formData,
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                // body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Form submitted successfully');
            }
            else {
                alert('Error submitting form');
            }
        } catch (error) {
            console.error('Error submitting form: ', error);
            alert('Error submitting form');
        }
    };


    return (
        <div id="quickOrderSection" className="quickOrderSection">
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
                        onSubmit={handleSubmit}
                        className="formQuickOrder"
                    >
                        <div className="column inputLine">
                            <label htmlFor="name"> Name</label>
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
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="row flex gap10betweenOrder">
                            <div className="flex column width50percent">
                                <label htmlFor=""> Country</label>
                                <select className="orderSelectField" value={country} onChange={(e) => setCountry(e.target.value)} name="Country">
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
                                    name="phone Number"
                                    onChange={(e) => setPhoneNUmber(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row flex gap10betweenOrder">
                            <div className="flex column width50percent">
                                <label htmlFor=""> Service Type</label>
                                <select className="orderSelectField" value={serviceType} onChange={(e) => setServiceType(e.target.value)} name="Service Type">
                                    <option value="Birth Certificates">Birth Certificates</option>
                                    <option value="Marriage Certificates">Marriage Certificates</option>
                                    <option value="Divorce Decrees">Divorce Decrees</option>
                                    <option value="Death Certificates">Death Certificates</option>
                                    <option value="Court Documents">Court Documents</option>
                                    <option value="Notarized Documents">Notarized Documents</option>
                                    <option value="Academic Diplomas">Academic Diplomas</option>
                                    <option value="Adoption Papers">Adoption Papers</option>
                                    <option value="Business Licenses">Business Licenses</option>
                                    <option value="Powers of Attorney">Powers of Attorney</option>
                                    <option value="Patent Applications">Patent Applications</option>
                                    <option value="Trademark Registrations">Trademark Registrations</option>
                                    <option value="Immigration Documents">Immigration Documents</option>
                                    <option value="Naturalization Papers">Naturalization Papers</option>
                                    <option value="Visa Applications">Visa Applications</option>
                                    <option value="Educational Transcripts">Educational Transcripts</option>
                                    <option value="School Records">School Records</option>
                                    <option value="Medical Reports">Medical Reports</option>
                                    <option value="Employment Contract">Employment Contract</option>
                                    <option value="Real Estate Transaction">Real Estate Transaction</option>
                                    <option value="Certificates of Good Standing">Certificates of Good Standing</option>
                                    <option value="Affidavit">Affidavit</option>
                                    <option value="Insurance Documents">Insurance Documents</option>
                                    <option value="Export Certificates">Export Certificates</option>
                                    <option value="Import Licenses">Import Licenses</option>
                                    <option value="Commercial Invoices">Commercial Invoices</option>
                                    <option value="Non-criminal Record Certificates">Non-criminal Record Certificates</option>
                                    <option value="Tax Residency Certificate">Tax Residency Certificate</option>
                                    <option value="Trade Agreements">Trade Agreements</option>
                                    <option value="Regulatory Filings">Regulatory Filings</option>
                                    <option value="Construction Permits">Construction Permits</option>
                                    <option value="Health Certificates">Health Certificates</option>
                                    <option value="Environmental Assessments">Environmental Assessments</option>
                                    <option value="Public Bids and Tenders">Public Bids and Tenders</option>
                                    <option value="Government Authorizations">Government Authorizations</option>
                                    <option value="Work Permits">Work Permits</option>
                                    <option value="Financial Statements">Financial Statements</option>
                                    <option value="Powers of Sale">Powers of Sale</option>
                                    <option value="Arbitration Agreements">Arbitration Agreements</option>
                                    <option value="Trust Documents">Trust Documents</option>
                                    <option value="Corporate Bylaws">Corporate Bylaws</option>
                                    <option value="Shareholder Agreements">Shareholder Agreements</option>
                                    <option value="Stock Certificates">Stock Certificates</option>
                                    <option value="Partnership Agreements">Partnership Agreements</option>
                                    <option value="Franchise Agreements">Franchise Agreements</option>
                                    <option value="Information Security Policies">Information Security Policies</option>
                                    <option value="Licensing Agreements">Licensing Agreements</option>
                                    <option value="Promissory Notes">Promissory Notes</option>
                                    <option value="Articles of Incorporation">Articles of Incorporation</option>
                                    <option value="Joint Venture Contracts">Joint Venture Contracts</option>
                                    <option value="Drivers License">Drivers License</option>
                                    <option value="Passport">Passport</option>
                                    <option value="FBI background check">FBI background check</option>
                                    <option value="Proof of residency">Proof of residency</option>
                                    <option value="Verification of identity">Verification of identity</option>
                                    <option value="Degree verification certificate">Degree verification certificate</option>
                                    <option value="Diploma">Diploma</option>
                                    <option value="Report card">Report card</option>
                                    <option value="Progress report">Progress report</option>
                                    <option value="Hi school diploma">Hi school diploma</option>
                                    <option value="Official transcript">Official transcript</option>
                                    <option value="W-2 and earning summary">W-2 and earning summary</option>
                                    <option value="Payroll statement">Payroll statement</option>
                                    <option value="Check stubs">Check stubs</option>
                                    <option value="Employment verification">Employment verification</option>
                                    <option value="Contractor agreement">Contractor agreement</option>
                                    <option value="Equivalency report">Equivalency report</option>
                                    <option value="Graduation verification letter">Graduation verification letter</option>
                                    <option value="Parental consent form">Parental consent form</option>
                                    <option value="Enrollment verification">Enrollment verification</option>
                                    <option value="Business tax certificate">Business tax certificate</option>
                                    <option value="Letter of engagement">Letter of engagement</option>
                                    <option value="Operating agreement">Operating agreement</option>
                                    <option value="Articles of incorporation">Articles of incorporation</option>
                                    <option value="Certificate of residency">Certificate of residency</option>
                                    <option value="Undergraduate record">Undergraduate record</option>
                                    <option value="Certificate or signature">Certificate or signature</option>
                                    <option value="IRS e-file signature authorization">IRS e-file signature authorization</option>
                                    <option value="Baptism record">Baptism record</option>
                                    <option value="Academic achievement record">Academic achievement record</option>
                                    <option value="Certification">Certification</option>
                                    <option value="Certificate of work experience">Certificate of work experience</option>
                                    <option value="Vital records">Vital records</option>
                                    <option value="Certificate of naturalization">Certificate of naturalization</option>
                                    <option value="Warranty deed">Warranty deed</option>
                                    <option value="Certificate of expected completion">Certificate of expected completion</option>
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
                                    <label htmlFor="fileInput">
                                        Upload
                                        <input
                                            type="file"
                                            id="fileInput"
                                            accept=".jpeg, .jpg, .png, .doc, .pdf"
                                            onChange={handleFileChange}
                                            style={{ display: 'none' }}
                                            name="file"
                                            required
                                        />
                                    </label>
                                </div>
                                <br />
                                {
                                    file ?
                                        <div>
                                            {file.name}
                                        </div>
                                        : null
                                }
                            </div>
                        </div>
                        <button className="submit width100" type="submit">
                            Submit
                        </button>
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