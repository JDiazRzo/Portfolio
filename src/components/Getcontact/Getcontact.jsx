import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SpotlightCard from '../SpotlightCard/SpotLightCard';
import ReCAPTCHA from 'react-google-recaptcha';

function GetContact() {
  const form = useRef();
  const recaptchaRef = useRef();
  const [toast, setToast] = useState(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      showToast("Please complete the reCAPTCHA.", "error");
      return;
    }

    emailjs.sendForm('service_dl7ji3p', 'template_pfbhj3g', form.current, 'BbaI-yQrHrGFriM_6')
      .then(() => {
        showToast("Message sent successfully!");
        form.current.reset();
        recaptchaRef.current.reset();
        setCaptchaVerified(false);
      })
      .catch(() => showToast("Something went wrong. Try again.", "error"));
  };

  return (
    <section id="contact" className="flex flex-col md:flex-row justify-center items-center mt-36 mb-12 px-6 md:px-16 gap-10 md:gap-16">

      <div className="w-full md:flex-1 text-center md:text-left md:mr-24">
        <p className="text-sm tracking-widest uppercase text-white/50 mb-2">CONTACT</p>
        <h2 className="text-3xl font-bold text-white mb-4">Let's Collaborate!</h2>
        <hr className="border-2 border-[#3A3C41] mb-4 w-3/4 mx-auto md:mx-0" />
        <p className="text-[#C7C7C7] text-lg leading-relaxed">
          I'm always open to discuss exciting projects and new opportunities.
        </p>
      </div>

      <div className="w-full md:flex-1 flex justify-center rounded-2xl">
        <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)" className="w-full max-w-[450px] rounded-2xl">
          <form ref={form} onSubmit={sendEmail} className="w-full p-6 md:p-8">

            <div className="flex flex-col mb-6">
              <label className="font-semibold text-white mb-2">Name</label>
              <input type="text" name="name" required placeholder="Your name"
                className="px-4 py-3 border border-[#3A3C41] rounded-xl bg-[#1E1F22] text-white outline-none focus:border-[#4C8CF5] transition-colors duration-200" />
            </div>

            <div className="flex flex-col mb-6">
              <label className="font-semibold text-white mb-2">Email</label>
              <input type="email" name="email" required placeholder="Your email"
                className="px-4 py-3 border border-[#3A3C41] rounded-xl bg-[#1E1F22] text-white outline-none focus:border-[#4C8CF5] transition-colors duration-200" />
            </div>

            <div className="flex flex-col mb-6">
              <label className="font-semibold text-white mb-2">Message</label>
              <textarea name="message" rows="5" required placeholder="Write your message here..."
                className="px-4 py-3 border border-[#3A3C41] rounded-xl bg-[#1E1F22] text-white outline-none focus:border-[#4C8CF5] transition-colors duration-200 resize-none w-full" />
            </div>

            <div className="mb-6">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LemJ4QsAAAAAIw1KoHXm-Vtuf1-FtXrxVV-Ypjj"
                onChange={() => setCaptchaVerified(true)}
                onExpired={() => setCaptchaVerified(false)}
                theme="dark"
              />
            </div>

            <button type="submit"
              className="w-full bg-white/10 backdrop-blur-md text-white px-5 py-3 rounded-xl text-sm font-medium border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-lg">
              Send Message
            </button>

          </form>

        </SpotlightCard>

      </div>

      {toast && (
        <div className={`fixed top-5 right-5 px-5 py-3 rounded-xl text-white text-sm z-50 shadow-lg
          ${toast.type === 'error' ? 'bg-red-500' : 'bg-[#3A76D9]'}`}>
          {toast.msg}
        </div>
      )}

    </section>
  );
}

export default GetContact;