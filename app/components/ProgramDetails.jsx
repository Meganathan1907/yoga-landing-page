import React from 'react';
import './ProgramDetails.css';

const modules = [
    {
        week: 'Step 1',
        title: 'Book Consultation',
        desc: 'Schedule a one-on-one online consultation with our certified yoga expert to understand your body, lifestyle, and concerns.'
    },
    {
        week: 'Step 2',
        title: 'Get Personalized Yoga Plan',
        desc: 'Receive a customized yoga and mindfulness plan designed specifically for your hormonal balance, fertility, or wellness goals.'
    },
    {
        week: 'Step 3',
        title: 'Heal Naturally at Home',
        desc: 'Follow guided online sessions at your pace and experience natural healing, strength, and emotional balance from home.'
    }
];

const ProgramDetails = () => {
    return (
        <section id="program" className="program section-padding">
            <div className="container">
                <div className="text-center section-header">
                    <h2 className="section-title">Start Your <span className="text-gradient">Healing Journey</span></h2>
                    <p className="section-subtitle">We make your wellness journey simple, personalized, and effective.</p>
                </div>

                <div className="timeline">
                    {modules.map((mod, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content glass-panel" style={{ animationDelay: `${index * 0.2}s` }}>
                                <span className="module-week">{mod.week}</span>
                                <h3 className="module-title">{mod.title}</h3>
                                <p className="module-desc">{mod.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramDetails;
