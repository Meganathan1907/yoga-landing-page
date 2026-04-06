import React from 'react';
import './Hero.css';
import Image from 'next/image';
import img5 from '@/app/asset/img5.jpg';

const Hero = () => {
    return (
        <section className="hero section-padding">
            <div className="container grid grid-cols-2 hero-grid">
                <div className="hero-content animate-fade-in">
                    <div className="badge">✨ Live Online Yoga Masterclass</div>
                    <h1 className="hero-title">
                        You're Not Just Tired. Your Hormones are <br />
                        <span className="text-gradient">Out Of Balance.</span>
                    </h1>
                    <p className="hero-subtitle">
                        This invitation is for women who are ready to heal PCOD, PCOS, and fertility challenges naturally — calmly, powerfully, and from the comfort of home.
                    </p>
                    <div className="hero-actions">
                        <a href="#program" className="btn btn-primary btn-lg">Start Your Healing Journey</a>
                        <a href="#about" className="btn btn-outline btn-lg">Learn More</a>
                    </div>
                    <div className="hero-social-proof">
                        <div className="avatars">
                            <div className="avatar"></div>
                            <div className="avatar"></div>
                            <div className="avatar"></div>
                            <div className="avatar more">+5k</div>
                        </div>
                        <p>Proven holistic healing for women's wellness.</p>
                    </div>
                </div>
                <div className='h-full '>
                    {/* <div className="visual-card glass-panel frequency-visual">
                        <div className="visual-circle circle-1"></div>
                        <div className="visual-circle circle-2"></div>
                        <div className="mockup-content">
                            <h3>Hormonal Balance</h3>
                            <div className="wave-container">
                                <div className="wave w-low"></div>
                                <div className="wave w-low"></div>
                                <div className="wave w-med-low"></div>
                                <div className="wave w-med highlight"></div>
                                <div className="wave w-med highlight"></div>
                                <div className="wave w-med highlight"></div>
                            </div>
                            <p className="wave-label">Shift from pain &rarr; harmony</p>
                        </div>
                    </div> */}
            <Image className='h-full w-full object-cover object-center' src={img5} alt="" />
                </div>
            </div>
            <div className="hero-bg-glow"></div>
        </section>
    );
};

export default Hero;
