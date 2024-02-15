const Footer = () => {

    const handleClick = (e, num) => {
        e.preventDefault();
        if (num == 1) {
            window.location.href = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0YkZpH3UiD_NLyOuPFBoNFpm5hdORQ9yV9K0ckl5YvRde0wNvU4ogh9zq5ZQ7MR7yI1AYKHrEh";
        }
        else {
            window.location.href = "#quickOrderSection";
        }
    }

    return (
        <div className="footer">
            <div className="section1Footer">
                <div className="footer1row">
                    <div className="linesInFooter1">
                        Contact Info
                    </div>
                    <br />
                    <div className="linesInFooter2">
                        (312) 733-8014
                    </div>
                    <br />
                    <div className="linesInFooter3">
                        22 West Washington Street Suite 1500
                    </div>
                    <div className="linesInFooter3">
                        Chicago, IL 60602
                    </div>
                    <div className="linesInFooter3">
                        USA
                    </div>
                </div>
                <div className="footer1row">
                    <div className="linesInFooter1">
                        Quick Links
                    </div>
                    <br />
                    <div className="linesInFooter3" onClick={(e) => handleClick(e, 2)}>
                        Translation services
                    </div>
                    <br />
                    <div className="linesInFooter3" onClick={(e) => handleClick(e, 2)}>
                        Apostille services
                    </div>
                    <br />
                    <div className="linesInFooter3" onClick={(e) => handleClick(e, 1)}>
                        Notarization
                    </div>
                </div>
                <div className="footer1row">
                    <br />

                    <br />
                    <div className="linesInFooter3">
                        Contact us
                    </div>
                    <br />
                    <div className="linesInFooter3">
                        Terms of Use
                    </div>
                    <br />
                    <div className="linesInFooter3">
                        Privacy Policy
                    </div>
                </div>
                <div className="footer4row">
                    <div className="linesInFooter1">
                        Business Hours
                    </div>
                    <br />
                    <div className="linesInFooter3">
                        <div>Mon:</div>
                        <div>
                            10:00 AM – 4:00 PM
                        </div>
                    </div>
                    <div className="linesInFooter3">
                        <div>  Tue: </div>
                        <div> 10:00 AM – 4:00 PM</div>
                    </div>
                    <div className="linesInFooter3">
                        <div>Wed: </div> <div>10:00 AM – 4:00 PM</div>
                    </div>
                    <div className="linesInFooter3">
                        <div> Thu:</div> <div>10:00 AM – 4:00 PM</div>
                    </div>
                    <div className="linesInFooter3">
                        <div>Fri:</div> <div>10:00 AM – 4:00 PM</div>
                    </div>
                    <div className="linesInFooter3">
                        <div>Sat:</div> <div>10:00 AM – 4:00 PM</div>
                    </div>
                    <div className="linesInFooter3">
                        <div>Sun:</div> <div>10:00 AM – 4:00 PM</div>
                    </div>
                </div>
            </div>
            <div className="section2Footer">

            </div>
            <div className="section3Footer">
                © 2024 Benson Bradley Signing Service LLC. All rights reserved
            </div>
        </div>
    );
}

export default Footer;