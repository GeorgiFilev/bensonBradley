import chicago from './assets/chicago.png';

const AboutUsSection = () => {
    return (
        <div className="aboutUsSection">
            <div className="aboutUsText">
                <div>
                    <div className='aboutUsTitle'>
                        About Us
                    </div>
                    <div className='textAbout'>
                        Benson Bradley Signing Service LLC, rooted in Chicago, specializes in mobile
                        notary and apostille services. Our experienced team prioritizes professionalism and convenience, catering to a diverse clientele with a range of notarial needs. Renowned for reliability and efficiency, we bring notary services directly to you, streamlining legal formalities and emphasizing customer satisfaction.
                    </div>
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