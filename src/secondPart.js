import svg from './assets/fi_5679332.svg'
import svg2 from './assets/fi_2.svg';
import svg3 from './assets/fi_3.svg';
import arrow from './assets/right-arrow.svg';

const SecondPart = () => {
    return (
        <div className="secondSection">
            <div className="threeCards">
                <div>
                    <img src={svg} alt="icon-list" />
                </div>
                <div className='secondSectionHeader'>
                    General Notarization Services
                </div>
                <div>
                    General notarization services involve the verification of the authenticity of documents by a notary public.
                    This includes witnessing the signing of documents, certifying copies of documents, administering oaths, and affirming signatures. Notarization ensures that the signers of documents are who they say they are and that they are signing the document willingly and knowingly. The notary public verifies the identity of the signers and confirms that they are not under duress. Additionally, notarization provides a level of
                    assurance regarding the validity of the document and the signatures contained within it.
                </div>
                <div className='rowOnCard'>
                    <span className='requestQuote'>
                        Request quote
                    </span>

                    <span className='getConsultation'>
                        Get consultation
                        <img src={arrow} alt="arrow-right" />
                    </span>
                </div>
            </div>
            <div className="threeCards">
                <div>
                    <img src={svg2} alt='pencil' />
                </div>
                <div className='secondSectionHeader'>
                    Apostille Services
                </div>
                <div>
                    Apostille services involve the certification of documents for international use in countries that are part of the Hague Apostille Convention. The purpose of an apostille is to authenticate the seals and signatures of officials on public documents such as birth certificates, court orders, notarizations, and other legal documents. Essentially, an apostille verifies the authenticity of the document and its origin, making it valid for use in foreign countries that are parties to the Apostille
                    Convention, simplifying the process of certifying documents for international legal purposes.
                </div>
                <div className='rowOnCard'>
                    <span className='requestQuote'>
                        Request quote
                    </span>

                    <span className='getConsultation'>
                        Get consultation
                        <img src={arrow} alt="arrow-right" />
                    </span>
                </div>
            </div>
            <div className="threeCards">
                <div>
                    <img src={svg3} alt="thumbnail" />
                </div>
                <div className='secondSectionHeader'>
                    Translation Services
                </div>
                <div>
                    Document translation services encompass the accurate and faithful conversion of written content from one language to another. This involves the translation of various documents such as legal contracts, business reports, academic transcripts, medical records, and more. Professional translators ensure that the meaning, tone, and style of the original document are preserved in the target language, taking into account cultural nuances and specialized terminology. Document translation services facilitate effective communication across different languages and
                    are vital for international business, legal proceedings, academic exchanges, and immigration processes, among other contexts.
                </div>
                <div className='rowOnCard'>
                    <span className='requestQuote'>
                        Request quote
                    </span>

                    <span className='getConsultation'>
                        Get consultation
                        <img src={arrow} alt="arrow-right" />
                    </span>
                </div>
            </div>

        </div>
    );
}

export default SecondPart;