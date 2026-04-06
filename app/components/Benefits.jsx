import React from 'react';
import './Benefits.css';

const benefitsData = [
    {
        id: 1,
        title: 'Regulated Cycles',
        desc: 'No more severe pain, irregularity, or reliance on symptom-masking pills.',
        icon: '🌸'
    },
    {
        id: 2,
        title: 'Natural Fertility & Healing',
        desc: 'Empowering your body to prepare for motherhood through holistic alignment.',
        icon: '🌱'
    },
    {
        id: 3,
        title: 'Stress & Pain Relief',
        desc: 'Staying grounded and physically comfortable even under high-stakes pressure.',
        icon: '🧘‍♀️'
    },
    {
        id: 4,
        title: 'Inner Strength & Balance',
        desc: 'Commanding your life and health with calm authority and effortless energy.',
        icon: '✨'
    }
];

const Benefits = () => {
    return (
        <section id="benefits" className="benefits section-padding">
            <div className="container">
                <div className="text-center section-header">
                    <h2 className="section-title">Women <span className="text-gradient">Report Changes In</span></h2>
                    <p className="section-subtitle">This practice changes how you heal, feel, and live.</p>
                </div>

                <div className="grid grid-cols-2 lg-grid-cols-4 benefits-grid">
                    {benefitsData.map((benefit, index) => (
                        <div
                            key={benefit.id}
                            className="benefit-card glass-panel"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3 className="benefit-title">{benefit.title}</h3>
                            <p className="benefit-desc">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
