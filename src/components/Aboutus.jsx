import React from 'react';
import '../index.css';

function About() {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <img src="/Images/about.jpeg" alt="About Us" className="about-image" />
                <div className="about-text">
                    <h2>About Us</h2>
                    <p>Welcome to Foodie's Paradise, your number one source for delicious and freshly prepared meals. We’re dedicated to giving you the very best food experience, with a focus on quality, taste, and customer service.</p>
                    <p>Founded in 2024, Foodie's Paradise has come a long way from its beginnings in a small kitchen. When we first started out, our passion for providing healthy and tasty meals drove us to start this business, and now we serve customers all over the city.</p>
                    <p>We hope you enjoy our food as much as we enjoy offering it to you. If you have any questions or comments, please don’t hesitate to contact us.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
