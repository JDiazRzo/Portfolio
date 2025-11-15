import './Getcontact.css'

function GetContact() {

    return (
        <div className="getContact">
        
            <div className="gcontl">
                <p>CONCTACT</p>
                <h2>Let's Collaborate!</h2>
                <hr />
                <p>
                    I'm always open to discuss exciting projects and new opportunities. 
                </p>
            </div>

            <div className="gcontr">
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Your name"
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Your email"
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="5" 
                            placeholder="Write your message here..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="send-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default GetContact