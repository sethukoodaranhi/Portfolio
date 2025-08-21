import style from "./css/contact.module.css";
import { Itim, Jacques_Francois } from "next/font/google";
const itim = Itim({
  subsets: ["latin"],
  weight: ["400"],
});
const jacques_francois = Jacques_Francois({
  subsets: ["latin"],
  weight: ["400"],
});
function ContactSection() {
  return (
    <section className={style.contact} id="contact">
        <div className="container">
          <div className={style.contactWrapper}>
            <div className={`${style.leftContent} ${itim.className}`} >
              <h2>Get In Touch</h2>
              <p className={`${jacques_francois.className}`}>Got an idea, a question, or just want to say hi? I'm all ears! Whether you're looking to build something cool together or simply curious about what I do, don’t hesitate to drop a message.</p>
              <img src="/images/contactGirl.svg" alt="" className="contactGirl" />
            </div>
            <div className={`${style.rightForm} ${itim.className}`}>
              <h2>Send me message</h2>
              <form className={style.contactForm}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="email" placeholder="Subject" />
                <textarea placeholder="Your Message" rows={3}></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>

    </section>
  )
}

export default ContactSection