import React from 'react';
import './Testimonials.css';

const reviews = [
    {
        id: 1,
        name: 'Nisha',
        role: 'Wellness Program Student',
        text: '"I really enjoyed the class. The instructions are very clear and easy to follow. The pace is perfect, not too fast, and I felt like I had enough time to settle into each pose. I loved the calming atmosphere."',
        initials: 'N'
    },
    {
        id: 2,
        name: 'Priya M.',
        role: 'PCOD Healing Student',
        text: '"I’ve been practicing more regularly, and I can feel my strength building. My periods have naturally regulated without pills, and I feel so much more emotionally balanced throughout the day."',
        initials: 'PM'
    },
    {
        id: 3,
        name: 'Anjali Sharma',
        role: 'Postnatal Member',
        text: '"If you feel like you are doing everything right but are absolutely exhausted internally, this program is the exact medicine you are looking for. Thank you Divrosh Yog Dhara!"',
        initials: 'AS'
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials section-padding">
            <div className="container">
                <div className="text-center section-header">
                    <h2 className="section-title">Real Women. <span className="text-gradient">Real Healing.</span></h2>
                    <p className="section-subtitle">What women say about Divrosh Yog Dhara's transformation.</p>
                </div>

                <div className="grid grid-cols-3 testimonials-grid">
                    {reviews.map((review, i) => (
                        <div key={review.id} className="review-card glass-panel" style={{ animationDelay: `${i * 0.2}s` }}>
                            <div className="quote-mark">"</div>
                            <p className="review-text">{review.text}</p>
                            <div className="review-author">
                                <div className="author-avatar">{review.initials}</div>
                                <div className="author-info">
                                    <h4 className="author-name">{review.name}</h4>
                                    <span className="author-role">{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
