import React from 'react';
import './Cta.css';

const Cta = () => {
    return (
        <section id="cta" className="cta section-padding">
            <div className="container">
                <div className="cta-box glass-panel">
                    <div className="cta-content">
                        <h2 className="cta-title">Talk to our expert today & <br /><span className="text-gradient">Claim Your Inner Peace.</span></h2>
                        <p className="cta-desc">
                            Get personalized guidance for hormonal balance, fertility, pregnancy, or overall women’s wellness. Do not wait for symptoms to get worse.
                        </p>
                        <div className="cta-actions">
                            <button className="btn btn-primary btn-lg cta-btn">Book Free Consultation</button>
                            <div className="cta-guarantee">
                                <span className="shield-icon">✨</span>
                                <span>Live guided online sessions. Let's heal together.</span>
                            </div>
                        </div>
                    </div>
                    <div className="cta-glow-bg"></div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
