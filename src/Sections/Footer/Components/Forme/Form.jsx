import "./form.css";


function Form() {
    return (
        <>
        <div className="footer-content">
            <div className="footer-content-left">
                <h2>Service</h2>
                <p>Our set of impeccable services serves as an essential part of any business which
                    is transforming its operations to the online realm. Our mastery isn't limited to
                    full-fledged website development but to every aspect reguired from head to toe for
                    a flexible and optimum website presence to run the business without faliures.
                </p>
            </div>
            <div className="footer-content-right">
                <form className="contact-us-form" action="https://api.web3forms.com/submit" method="POST">

                    <input type="hidden" name="access_key" value={process.env.REACT_APP_API_KEY} />

                    <input className="input-container" type="text" name="name" placeholder="Name" required />
                    <input className="input-container" type="email" name="email" placeholder="Email" required />
                    <textarea className="input-container" type="texteare" name="message" placeholder="Message" required />
                    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                    <button className="btn-footer" type="submit">Send</button>
                </form>
            </div>
        </div>
        </>

    )
}
export default Form;