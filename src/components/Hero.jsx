import React, { useEffect } from 'react';
import Typed from 'typed.js';
import '../index.css';

function Hero() {
    useEffect(() => {
        const options = {
            strings: ['Welcome to Foodie\'s Paradise',],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1000,
            startDelay: 500,
            loop: true,
        };

        const typed = new Typed('.typed-text', options);

        // Cleanup on component unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section
            className="hero"
            id="home"
            style={{ backgroundImage: "url('/Images/bg7.jpg')" }}
        >
            <div className="content">
                <h1 className="typed-text">Welcome to Foodie's Paradise</h1>
                <p>Delicious food, delivered to your door.</p>
            </div>
            <button>Order Now</button>
        </section>
    );
}

export default Hero;
