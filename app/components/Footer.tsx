
import style from './css/footer.module.css';
function Footer() {
    const contactLinks = ["Gmail", "Linkedin", "Instagram"];
    return (
        <section className={style.footer}>
            <div className="container">
                <div className={style.footerWrapper}>
                    {
                        contactLinks.map((item, index) => (
                            <div key={index} className={style.footerLink}>
                                <img src={`/images/${item}.png`} alt="" className="src" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Footer