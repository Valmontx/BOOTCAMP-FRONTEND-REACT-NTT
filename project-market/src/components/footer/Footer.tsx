import React from "react"

const Footer: React.FC<{}> = ({ }) => {
    return (
        <footer>
            <section className="container-icons" id="contact">
                <p className="footer-text-first">Follow us on our social networks</p>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-tiktok"></i>
                <p className="header-title header-title-footer">YouMarket ♡</p>
                <div>
                    <p className="footer-text-second "> © 2024 YouMarket ♡.
                        All rights reserved.
                    </p>
                </div>
            </section>
        </footer>
    )
}

export default Footer