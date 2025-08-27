import style from './css/footer.module.css';

function Footer() {
    const contactLinks = [
        {
            name: "Gmail",
            icon: "/images/Gmail.png",
            url: "https://mail.google.com/mail/?view=cm&to=sethukoodaranhi@gmail.com", 
        },
        {
            name: "Linkedin",
            icon: "/images/Linkedin.png",
            url: "https://www.linkedin.com/in/sethulakshmi-as-638160232/",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.png",
            url: "https://www.instagram.com/sethulakshmi_as", 
        },
    ];

    return (
        <section className={style.footer}>
            <div className="container">
                <div className={style.footerWrapper}>
                    {contactLinks.map((item, index) => (
                        <a 
                            key={index} 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={style.footerLink}
                        >
                            <img src={item.icon} alt={item.name} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Footer;
