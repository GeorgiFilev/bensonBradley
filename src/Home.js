import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import SecondPart from "./secondPart";
import AboutUsSection from "./AboutUs";
import MapSection from "./MapSection";
import CommitmentSection from "./CommitmentSection";
import ClientVoicesSatisfaction from "./ClientVoicesSatisfaction";
import Questions from "./Questions";
import QuickOrder from "./QuickOrder";

const Home = ({ loggedIn, handleLogout }) => {

    const [name, setName] = useState('mario');
    const handleCLickAgain = (name) => { };

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
            "stars": 3,
        },
        {
            "id": 3,
            "message": "Fantastic notary. Recommend 100%. Straightforward scheduling process online and ultra convenient location. Will definitely use again whenever I need a notary in Chicago. Eric was also quick to respond to questions I had prior to my appointment.",
            "name": "Justin G",
            "stars": 5,
        }
    ];
    const [clientVoices, setClientVoices] = useState(null);

    useEffect(() => {
        setClientVoices(voices);
    }, [])

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');


    return (
        <div className="home">

            {/* <button onClick={() => handleCLickAgain('mario')}>Click me again</button> */}
            {error && <div> {error}</div>}
            {isLoading && <div> Loading... </div>}

            <div className="firstSection">
                <span className="whitishBack"></span>
                <div className="firstSectionTextBuble">
                    <h4>  Notary Public in Chicago  |  Opening at 10:00 AM</h4>
                    <h1 className="bigtitle"> Professional Notary <br /> Services Worldwide</h1>

                    <h3 className="welcome">
                        Welcome to Benson Bradley Signing Service LLC, where we <br />
                        specialize in providing top-tier mobile notary and apostille services <br />
                        worldwide.
                    </h3>
                    <div className="whiteButton">
                        Make an appointment
                    </div>
                    <div className="rightBot">
                        <span className="bubbleTransparent"> Apostille Processing</span>
                        <span className="bubbleTransparent"> General Notarization</span>
                        <span className="bubbleTransparent"> Remote Online Notarization</span>
                        <span className="bubbleTransparent"> Passport Certification</span>
                    </div>
                    <div className="rightBot">
                        <span className="bubbleTransparent"> Translation Certification</span>
                        <span className="bubbleTransparent"> E-Notary Services</span>
                        <span className="bubbleTransparent"> Document Notarization</span>
                        <span className="bubbleTransparent"> Life Insurance</span>
                        <span className="bubbleTransparent"> Fingerprinting</span>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
            <br />
            <br />
            <SecondPart></SecondPart>
            <br />
            <br />
            <AboutUsSection></AboutUsSection>
            <br />
            <br />
            <MapSection></MapSection>

            <br />
            <br />

            <CommitmentSection></CommitmentSection>

            <br />
            <br />

            {clientVoices ? <ClientVoicesSatisfaction clientVoices={clientVoices}></ClientVoicesSatisfaction> : null}

            <br />
            <br />

            <Questions></Questions>

            <br />
            <br />
            <QuickOrder></QuickOrder>
            <br />
            <br />
            <br />

            {blogs ? <BlogList blogs={blogs} height="big"></BlogList> : null}

            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} height="big" handleDelete={handleDelete}></BlogList> */}

            {
                loggedIn == true ? <button onClick={handleLogout}> log out</button> : <button onClick={goToLogin}> login</button>
            }
            <p>{name}</p>


        </div>
    );
}

export default Home;