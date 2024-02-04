import { useEffect, useState } from "react";
import img1 from './assets/highestProffesionalStandards.png';
import img2 from './assets/ourFocus.png';
import img3 from './assets/Rectangle 8 (3).png';
import img4 from './assets/Rectangle 8 (4).png';
import img5 from './assets/Rectangle 8 (5).png';
import img6 from './assets/Rectangle 8 (6).png';
import img7 from './assets/Rectangle 8 (7).png';

import arrow from './assets/right-arrow.svg';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CommitmentSection = ({ loggedIn, blogs }) => {
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
                    <div className={highlited === 1 ? "higlitedHeader" : "greyHeader"} onClick={() => handleCick(1)}>
                        {highlited === 1 ? <img src={arrow} className="arrowRightCommitmentSection" alt="arrow-right"></img> : null}
                        {blogs[7].title}
                    </div>
                    <div className={highlited === 2 ? "higlitedHeader" : "greyHeader"} onClick={() => handleCick(2)}>
                        {highlited === 2 ? <img src={arrow} className="arrowRightCommitmentSection" alt="arrow-right"></img> : null}
                        {blogs[8].title}
                    </div>
                    <div className={highlited === 3 ? "higlitedHeader" : "greyHeader"} onClick={() => handleCick(3)}>
                        {highlited === 3 ? <img src={arrow} className="arrowRightCommitmentSection" alt="arrow-right"></img> : null}
                        {blogs[9].title}
                    </div>
                    <div className={highlited === 4 ? "higlitedHeader" : "greyHeader"} onClick={() => handleCick(4)}>
                        {highlited === 4 ? <img src={arrow} className="arrowRightCommitmentSection" alt="arrow-right"></img> : null}
                        {blogs[10].title}
                    </div>
                    <div className={highlited === 5 ? "higlitedHeader" : "greyHeader"} onClick={() => handleCick(5)}>
                        {highlited === 5 ? <img src={arrow} className="arrowRightCommitmentSection" alt="arrow-right"></img> : null}
                        {blogs[11].title}
                    </div>
                    <div className={highlited === 6 ? "higlitedHeader" : "greyHeader"} onClick={() => handleCick(6)}>
                        {highlited === 6 ? <img src={arrow} className="arrowRightCommitmentSection" alt="arrow-right"></img> : null}
                        {blogs[12].title}
                    </div>
                    <div className={highlited === 7 ? "higlitedHeader" : "greyHeader"} onClick={() => handleCick(7)}>
                        {highlited === 7 ? <img src={arrow} className="arrowRightCommitmentSection" alt="arrow-right"></img> : null}
                        {blogs[13].title}
                    </div>
                </div>

                {(() => {
                    switch (highlited) {
                        case 1:
                            return (
                                <div className="imageCommitmentSection">
                                    <img src={img1} alt="imageText1" />
                                    <div className="textImageCommitment">
                                        {blogs[7].body}
                                    </div>
                                    {
                                        loggedIn === true ?

                                            <Link className="adminEditLink" to={`/blogs/${7}`}>
                                                Edit
                                            </Link>
                                            : null
                                    }
                                </div>
                            );

                        case 2:
                            return (
                                <div className="imageCommitmentSection">
                                    <img src={img2} alt="imageText2" />
                                    <div className="textImageCommitment">
                                        {blogs[8].body}
                                    </div>
                                    {
                                        loggedIn === true ?

                                            <Link className="adminEditLink" to={`/blogs/${8}`}>
                                                Edit
                                            </Link>
                                            : null
                                    }
                                </div>
                            );

                        case 3:
                            return (
                                <div className="imageCommitmentSection">
                                    <img src={img3} alt="imageText3" />
                                    <div className="textImageCommitment">
                                        {blogs[9].body}
                                    </div>
                                    {
                                        loggedIn === true ?

                                            <Link className="adminEditLink" to={`/blogs/${9}`}>
                                                Edit
                                            </Link>
                                            : null
                                    }
                                </div>
                            );

                        case 4:
                            return (
                                <div className="imageCommitmentSection">
                                    <img src={img4} alt="imageText4" />
                                    <div className="textImageCommitment">
                                        {blogs[10].body}
                                    </div>
                                    {
                                        loggedIn === true ?

                                            <Link className="adminEditLink" to={`/blogs/${10}`}>
                                                Edit
                                            </Link>
                                            : null
                                    }
                                </div>
                            );

                        case 5:
                            return (
                                <div className="imageCommitmentSection">
                                    <img src={img5} alt="imageText5" />
                                    <div className="textImageCommitment">
                                        {blogs[11].body}
                                    </div>
                                    {
                                        loggedIn === true ?

                                            <Link className="adminEditLink" to={`/blogs/${11}`}>
                                                Edit
                                            </Link>
                                            : null
                                    }
                                </div>
                            );

                        case 6:
                            return (
                                <div className="imageCommitmentSection">
                                    <img src={img6} alt="imageText6" />
                                    <div className="textImageCommitment">
                                        {blogs[12].body}
                                    </div>
                                    {
                                        loggedIn === true ?

                                            <Link className="adminEditLink" to={`/blogs/${12}`}>
                                                Edit
                                            </Link>
                                            : null
                                    }
                                </div>
                            );

                        case 7:
                            return (
                                <div className="imageCommitmentSection">
                                    <img src={img7} alt="imageText7" />
                                    <div className="textImageCommitment">
                                        {blogs[13].body}
                                    </div>
                                    {
                                        loggedIn === true ?

                                            <Link className="adminEditLink" to={`/blogs/${13}`}>
                                                Edit
                                            </Link>
                                            : null
                                    }
                                </div>
                            );


                        default:
                            return (
                                <div className="imageCommitmentSection">
                                    <img src={img1} alt="imageText1" />
                                    <div className="textImageCommitment">
                                        We aim to mantain the highest level of professionalism and
                                        ethical standards in all our interactions and services.
                                    </div>
                                    {
                                        loggedIn === true ?

                                            <Link className="adminEditLink" to={`/blogs/${7}`}>
                                                Edit
                                            </Link>
                                            : null
                                    }
                                </div>
                            );

                    }
                })()}




            </div>
        </div >
    );
}

export default CommitmentSection;