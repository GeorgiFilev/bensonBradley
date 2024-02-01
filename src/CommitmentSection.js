import { useEffect, useState } from "react";
import img1 from './assets/highestProffesionalStandards.png';
import img2 from './assets/ourFocus.png';
import img3 from './assets/Rectangle 8 (3).png';
import img4 from './assets/Rectangle 8 (4).png';
import img5 from './assets/Rectangle 8 (5).png';
import img6 from './assets/Rectangle 8 (6).png';
import img7 from './assets/Rectangle 8 (7).png';

import arrow from './assets/right-arrow.svg';

const CommitmentSection = () => {
    const [highlited, setHighlited] = useState(1);

    useEffect(() => {
        const textElement = document.querySelector('.textImageCommitment');
        const lineHeight = window.getComputedStyle(textElement).getPropertyValue('line-height');
        textElement.style.setProperty('--lineHeight', lineHeight);

        // Calculate the number of lines and adjust margin-top
        const numberOfLines = textElement.clientHeight / parseFloat(lineHeight);
        const adjustedMarginTop = -1 * numberOfLines * parseFloat(lineHeight);

        textElement.style.marginTop = `${adjustedMarginTop}px`;
    });

    const handleCick = (number) => {
        switch (number) {
            case 1:
                setHighlited(1);
                break;
            case 2:
                setHighlited(2);
                break;
            case 3:
                setHighlited(3);
                break;
            case 4:
                setHighlited(4);
                break;
            case 5:
                setHighlited(5);
                break;
            case 6:
                setHighlited(6);
                break;
            case 7:
                setHighlited(7);
                break;
            default:
                setHighlited(1);
                break;
        }

    }

    return (
        <div className="commitmentSection">
            <h1 className="commitmentTitle">
                Commitment to excellence
            </h1>
            <h3 className="commitmentSubheader">
                Our primary goal is to set the standard for notary and apostille services <br />
                in Chicago. We are dedicated to:
            </h3>
            <br />

            <div className="commitmentTwosections">
                <div className="highestProffesional">
                    <div className={highlited == 1 ? "higlitedHeader" : "greyHeader"} onClick={() => handleCick(1)}>
                        {highlited == 1 ? <img src={arrow} className="arrowRightCommitmentSection" alt="arrow-right"></img> : null}
                        Highest Professional Standards
                    </div>
                    <div className={highlited == 2 ? "higlitedHeader" : "greyHeader"} onClick={() => handleCick(2)}>
                        {highlited == 2 ? <img src={arrow} className="arrowRightCommitmentSection" alt="arrow-right"></img> : null}
                        Client Satisfaction
                    </div>
                    <div className={highlited == 3 ? "higlitedHeader" : "greyHeader"} onClick={() => handleCick(3)}>
                        {highlited == 3 ? <img src={arrow} className="arrowRightCommitmentSection" alt="arrow-right"></img> : null}
                        Accessiblity
                    </div>
                    <div className={highlited == 4 ? "higlitedHeader" : "greyHeader"} onClick={() => handleCick(4)}>
                        {highlited == 4 ? <img src={arrow} className="arrowRightCommitmentSection" alt="arrow-right"></img> : null}
                        Technological Advancements
                    </div>
                    <div className={highlited == 5 ? "higlitedHeader" : "greyHeader"} onClick={() => handleCick(5)}>
                        {highlited == 5 ? <img src={arrow} className="arrowRightCommitmentSection" alt="arrow-right"></img> : null}
                        Community Trust
                    </div>
                    <div className={highlited == 6 ? "higlitedHeader" : "greyHeader"} onClick={() => handleCick(6)}>
                        {highlited == 6 ? <img src={arrow} className="arrowRightCommitmentSection" alt="arrow-right"></img> : null}
                        Education and Informing
                    </div>
                    <div className={highlited == 7 ? "higlitedHeader" : "greyHeader"} onClick={() => handleCick(7)}>
                        {highlited == 7 ? <img src={arrow} className="arrowRightCommitmentSection" alt="arrow-right"></img> : null}
                        Long-term Relationships
                    </div>
                </div>

                {(() => {
                    switch (highlited) {
                        case 1:
                            return (
                                <div className="imageCommitmentSection">
                                    <img src={img1} alt="imageText1" />
                                    <div className="textImageCommitment">
                                        We aim to mantain the highest level of professionalism and
                                        ethical standards in all our interactions and services.
                                    </div>
                                </div>
                            );
                            break;
                        case 2:
                            return (
                                <div className="imageCommitmentSection">
                                    <img src={img2} alt="imageText2" />
                                    <div className="textImageCommitment">
                                        Our focus is on delivering exceptional service that meets and exceeds the expectations of
                                        our clients, ensuring their notarial needs are met with utmost accuracy and efficiency.
                                    </div>
                                </div>
                            );
                            break;
                        case 3:
                            return (
                                <div className="imageCommitmentSection">
                                    <img src={img3} alt="imageText3" />
                                    <div className="textImageCommitment">
                                        We strive to make notarial services more accessible by offering mobile solutions that cater to the
                                        busy schedules of our clients, providing convenience without compromising on quality.
                                    </div>
                                </div>
                            );
                            break;
                        case 4:
                            return (
                                <div className="imageCommitmentSection">
                                    <img src={img4} alt="imageText4" />
                                    <div className="textImageCommitment">
                                        Continuously seeking to incorporate the latest technology to streamline our processes and
                                        improve the overall client experience.
                                    </div>
                                </div>
                            );
                            break;
                        case 5:
                            return (
                                <div className="imageCommitmentSection">
                                    <img src={img5} alt="imageText5" />
                                    <div className="textImageCommitment">
                                        Building and maintaining a strong reputation within the community by being a reliable and
                                        trustworthy service provider.
                                    </div>
                                </div>
                            );
                            break;
                        case 6:
                            return (
                                <div className="imageCommitmentSection">
                                    <img src={img6} alt="imageText6" />
                                    <div className="textImageCommitment">
                                        We believe in empowering our clients with knowledge, helping them understand the importance
                                        and implications of notarizations and apostille certifications.
                                    </div>
                                </div>
                            );
                            break;
                        case 7:
                            return (
                                <div className="imageCommitmentSection">
                                    <img src={img7} alt="imageText7" />
                                    <div className="textImageCommitment">
                                        Developing lasting relationships with our clients based on mutual respect, understanding, and
                                        excellence in service.
                                    </div>
                                </div>
                            );
                            break;

                        default:
                            return (
                                <div className="imageCommitmentSection">
                                    <img src={img1} alt="imageText1" />
                                    <div className="textImageCommitment">
                                        We aim to mantain the highest level of professionalism and
                                        ethical standards in all our interactions and services.
                                    </div>
                                </div>
                            );
                            break;
                    }
                })()}




            </div>
        </div >
    );
}

export default CommitmentSection;