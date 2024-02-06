import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import SecondPart from "./secondPart";
import AboutUsSection from "./AboutUs";
import MapSection from "./MapSection";
import CommitmentSection from "./CommitmentSection";
import ClientVoicesSatisfaction from "./ClientVoicesSatisfaction";
import Questions from "./Questions";
import QuickOrder from "./QuickOrder";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Popup from "./Popup";

const Home = ({ loggedIn, handleLogout }) => {


    const history = useHistory();
    const goToLogin = () => {
        history.push("/login");
    }
    const voices = [
        {
            "id": 1,
            "message": "We had documents notarized today by Glynis Wheeler. Glynis was and is amazing. We had a complicated situation. She handled it with professionalism and understanding that went above and beyond. She clearly loves people. I understand she also sells insurance. She'll get every future referral and Chicago business dealing I have.",
            "name": "Jason",
            "stars": 4,
        },
        {
            "id": 2,
            "message": "Excellent service. Eric Howell was great to work with. Great location. Fast and easy to do. Will definitely come here again.",
            "name": "Dino M",
            "stars": 5,
        },
        {
            "id": 3,
            "message": "Fantastic notary. Recommend 100%. Straightforward scheduling process online and ultra convenient location. Will definitely use again whenever I need a notary in Chicago. Eric was also quick to respond to questions I had prior to my appointment.",
            "name": "Justin G",
            "stars": 5,
        }
    ];
    const [clientVoices, setClientVoices] = useState(null);

    const [isPopupVisible, setPopupVisible] = useState(false);
    const [selectedBubbleData, setSelectedBubbleData] = useState(null);

    const handleBubbleClick = (number, blogs) => {
        console.log(blogs);
        if (blogs) {
            switch (number) {
                case 1:
                    setSelectedBubbleData({
                        title: blogs[19].title,
                        content: blogs[19].body,
                        buttonText: 'Click to Order',
                    });
                    setPopupVisible(true);
                    break;
                case 2:
                    setSelectedBubbleData({
                        title: blogs[20].title,
                        content: blogs[20].body,
                        buttonText: 'Make an appointment with Notary',
                    });
                    setPopupVisible(true);
                    break;
                case 3:
                    setSelectedBubbleData({
                        title: blogs[21].title,
                        content: blogs[21].body,
                        buttonText: 'Make an appointment',
                    });
                    setPopupVisible(true);
                    break;
                case 4:
                    setSelectedBubbleData({
                        title: blogs[22].title,
                        content: blogs[22].body,
                        buttonText: 'Make an appointment',
                    });
                    setPopupVisible(true);
                    break;
                case 5:
                    setSelectedBubbleData({
                        title: blogs[23].title,
                        content: blogs[23].body,
                        buttonText: 'Make an appointment',
                    });
                    setPopupVisible(true);
                    break;
                case 6:
                    setSelectedBubbleData({
                        title: blogs[24].title,
                        content: blogs[24].body,
                        buttonText: 'Make an appointment',
                    });
                    setPopupVisible(true);
                    break;
                case 7:
                    setSelectedBubbleData({
                        title: blogs[25].title,
                        content: blogs[25].body,
                        buttonText: 'Make an appointment',
                    });
                    setPopupVisible(true);
                    break;
                case 8:
                    setSelectedBubbleData({
                        title: blogs[26].title,
                        content: blogs[26].body,
                        buttonText: 'Learn more',
                    });
                    setPopupVisible(true);
                    break;
            }
        }


    };


    useEffect(() => {
        setClientVoices(voices);
    }, [])

    // const apiUrl = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/api`;
    const apiUrl = `/api`;
    const { data: blogs, isLoading, error } = useFetch(`${apiUrl}/blogs`);
    console.log(process.env);

    return (
        <div className={"home"}>

            {/* <button onClick={() => handleCLickAgain('mario')}>Click me again</button> */}
            {error && <div> {error}</div>}
            {isLoading && <div> Loading... </div>}
            {blogs &&
                <div>
                    <div className="firstSection">
                        <span className="whitishBack"></span>
                        <div className="firstSectionTextBuble">
                            <h4>  Notary Public in Chicago  |  Opening at 10:00 AM</h4>
                            <h1 className="bigtitle"> {blogs[1].title}</h1>

                            <h3 className="welcome">
                                {blogs[1].body}
                            </h3>
                            {
                                loggedIn === true ?

                                    <Link className="adminEditLink" to={`/blogss/${1}`}>
                                        Edit
                                    </Link>
                                    : null
                            }
                            <div className="whiteButton">
                                <a className="phoneRedirect" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0YkZpH3UiD_NLyOuPFBoNFpm5hdORQ9yV9K0ckl5YvRde0wNvU4ogh9zq5ZQ7MR7yI1AYKHrEh">Make an appointment</a>
                            </div>
                            <div className="rightBot">
                                <span className="bubbleTransparent" onClick={() => handleBubbleClick(1, blogs)}> Apostille Processing</span>
                                <span className="bubbleTransparent" onClick={() => handleBubbleClick(2, blogs)}> General Notarization</span>
                                <span className="bubbleTransparent" onClick={() => handleBubbleClick(3, blogs)}> Remote Online Notarization</span>
                                <span className="bubbleTransparent" onClick={() => handleBubbleClick(4, blogs)}> Passport Certification</span>
                            </div>
                            <div className="rightBot">
                                <span className="bubbleTransparent" onClick={() => handleBubbleClick(5, blogs)}> Translation Certification</span>
                                <span className="bubbleTransparent" onClick={() => handleBubbleClick(6, blogs)}> E-Notary Services</span>
                                <span className="bubbleTransparent" onClick={() => handleBubbleClick(7, blogs)}> Document Notarization</span>
                                <span className="bubbleTransparent" onClick={() => handleBubbleClick(8, blogs)}> Life Insurance</span>
                                <span className="bubbleTransparent" onClick={() => handleBubbleClick(9, blogs)}> Fingerprinting</span>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>

                    {isPopupVisible && selectedBubbleData && (
                        <Popup onClose={() => setPopupVisible(false)} dynamicData={selectedBubbleData} />
                    )}
                    <br />
                    <br />
                    <SecondPart loggedIn={loggedIn} blogs={blogs}></SecondPart>
                    <br />
                    <br />
                    <AboutUsSection loggedIn={loggedIn} blogs={blogs}></AboutUsSection>
                    <br />
                    <br />
                    <MapSection loggedIn={loggedIn} blogs={blogs}></MapSection>

                    <br />
                    <br />

                    <CommitmentSection loggedIn={loggedIn} blogs={blogs}></CommitmentSection>

                    <br />
                    <br />

                    {clientVoices ? <ClientVoicesSatisfaction clientVoices={clientVoices}></ClientVoicesSatisfaction> : null}

                    <br />
                    <br />

                    <Questions loggedIn={loggedIn} blogs={blogs}></Questions>

                    <br />
                    <br />
                    <QuickOrder></QuickOrder>
                    <br />
                    <br />
                    <br />

                    {/* {blogs ? <BlogList blogs={blogs} height="big"></BlogList> : null} */}

                    {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} height="big" handleDelete={handleDelete}></BlogList> */}

                    {
                        loggedIn === true ? <button onClick={handleLogout}> log out</button> : <button className="hiddenLogin" onClick={goToLogin}> login</button>
                    }
                    <div className="elfsight-app-7c129b96-653b-4934-bdce-dfcb9dff3a21" data-elfsight-app-lazy></div>
                </div>

            }


        </div>
    );
}

export default Home;