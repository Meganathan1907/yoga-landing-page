import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <span className="footer-logo text-gradient">Divrosh Yog Dhara</span>
                        <p className="footer-desc">
                            Healing • Harmony • Holistic Women’s Wellness. Empowering women through specialized online yoga for balance and complete well-being.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title">Programs</h4>
                        <ul>
                            <li><a href="#benefits">PCOD & PCOS Healing</a></li>
                            <li><a href="#about">Prenatal Yoga</a></li>
                            <li><a href="#testimonials">Success Stories</a></li>
                            <li><a href="#cta">Consultation</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title">Company</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="mailto:roshnid25@gmail.com">Contact</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4 className="footer-title">Connect</h4>
                        <div className="social-icons">
                            <a href="tel:918097672909" className="social-icon">📞</a>
                            <a href="mailto:roshnid25@gmail.com" className="social-icon">✉️</a>
                            <a href="#" className="social-icon">IG</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Arihant bldg, B/207, Sudha Park, Ghatkopar East, Mumbai 400077</p>
                    <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>&copy; {new Date().getFullYear()} Divrosh Yog Dhara. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
