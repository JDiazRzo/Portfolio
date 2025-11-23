import './Getcontact.css';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function GetContact() {
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState("");

    const [toast, setToast] = useState(null);

    const showToast = (msg, type = "success") => {
        setToast({ msg, type });

        setTimeout(() => {
            setToast(null);
        }, 3500); 
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
                'service_dl7ji3p',
                'template_pfbhj3g',
                form.current,
                'BbaI-yQrHrGFriM_6'
            )
        .then(() => {
            showToast("Message sent successfully!");
            form.current.reset();
        })
        .catch(() => {
            showToast("Something went wrong. Try again.", "error");
        });
    };
        return (
        <section id="contacto" className="getContact">

            <div className="gcontl">
                <p>CONTACT</p>
                <h2>Let's Collaborate!</h2>
                <hr />
                <p>I'm always open to discuss exciting projects and new opportunities.</p>
            </div>

            <div className="gcontr">
                <form ref={form} onSubmit={sendEmail} className="contact-form">

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required placeholder="Your name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required placeholder="Your email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="5" required placeholder="Write your message here..."></textarea>
                    </div>

                    <button type="submit" className="send-btn">Send Message</button>

                </form>

                
                {toast && (
                    <div className={`toast ${toast.type}`}>
                        {toast.msg}
                    </div>
                )}
            </div>

        </section>
    );
}

export default GetContact;
