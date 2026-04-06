import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container about-grid">
                <div className="about-content">
                    <h2 className="section-title">Why <span className="text-gradient">Generic Advice Isn't Working</span></h2>

                    <div className="comparison-grid">
                        <div className="comparison-box glass-panel">
                            <h3 className="comp-title">You've Tried:</h3>
                            <ul className="about-list">
                                <li><span className="cross">✕</span><span>Crash diets</span></li>
                                <li><span className="cross">✕</span><span>Random generic workouts</span></li>
                                <li><span className="cross">✕</span><span>Over-the-counter painkillers</span></li>
                                <li><span className="cross">✕</span><span>Ignoring the symptoms</span></li>
                            </ul>
                        </div>

                        <div className="comparison-box glass-panel highlight-box">
                            <h3 className="comp-title">Yet…</h3>
                            <ul className="about-list">
                                <li><span className="alert">!</span><span>Your periods are still irregular</span></li>
                                <li><span className="alert">!</span><span>Stubborn weight won't budge</span></li>
                                <li><span className="alert">!</span><span>Your energy feels completely depleted</span></li>
                                <li><span className="alert">!</span><span>You’re strong on the outside — silently struggling inside</span></li>
                            </ul>
                        </div>
                    </div>

                    <p className="about-conclusion mt-4">
                        The problem isn’t your discipline. It’s that your body needs holistic healing, not a patchwork fix.
                    </p>
                </div>

                <div className="qualifier-section mt-5 glass-panel">
                    <h2 className="section-title text-center" style={{ fontSize: '2rem' }}>Please Read This Carefully</h2>
                    <div className="grid grid-cols-2 mt-4">
                        <div className="qualifier-box">
                            <h3 className="text-secondary">✕ Not for women who:</h3>
                            <ul className="qualifier-list">
                                <li>Want temporary motivation</li>
                                <li>Are looking for a quick medical pill fix</li>
                                <li>Expect physical change without commitment</li>
                            </ul>
                        </div>

                        <div className="qualifier-box">
                            <h3 className="text-primary">✓ This is for women who:</h3>
                            <ul className="qualifier-list">
                                <li>Are internally exhausted by PCOD/PCOS symptoms</li>
                                <li>Feel stuck despite trying “everything right”</li>
                                <li>Take responsibility for natural, holistic healing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
