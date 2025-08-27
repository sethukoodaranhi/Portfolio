'use client'

import style from "./css/contact.module.css";
import { Itim, Jacques_Francois } from "next/font/google";
import { useForm, SubmitHandler, set } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../schemas/contact";
import { useState } from "react";


const itim = Itim({
  subsets: ["latin"],
  weight: ["400"],
});
const jacques_francois = Jacques_Francois({
  subsets: ["latin"],
  weight: ["400"],
});
type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};
function ContactSection() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: yupResolver(contactSchema)
  })
  const [loader, setloader] = useState(false)
  const handleContactSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    setloader(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if(result.status){
      reset();
      setloader(false);
    }
    console.log(result);
  }
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
            <form className={style.contactForm} onSubmit={handleSubmit(handleContactSubmit)}>
              <input type="text" placeholder="Name" {...register('name')} />
              {
                errors.name && <p className={`${style.errorMsg} ${errors.name ? style.show : ""}`}>{errors.name.message}</p>
              }
              <input type="email" placeholder="Email" {...register('email')} />
              {
                errors.email && <p className={`${style.errorMsg} ${errors.email ? style.show : ""}`}>{errors.email.message}</p>
              }

              <input type="text" placeholder="Subject" {...register('subject')} />
              {
                errors.subject && <p className={`${style.errorMsg} ${errors.subject ? style.show : ""}`}>{errors.subject.message}</p>
              }
              <textarea placeholder="Your Message" rows={3} {...register('message')}></textarea>
              {
                errors.message && <p className={`${style.errorMsg} ${errors.message ? style.show : ""}`}>{errors.message.message}</p>
              }
             
              <button type="submit" disabled={loader} className={style.submitBtn}>
                {
                  loader ? "sending..." : "Send Message"
                }
                
                </button>
              
            </form>
            
          </div>
        </div>
      </div>

    </section>
  )
}

export default ContactSection