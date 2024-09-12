import React from 'react';
import '../index.css';

function Menu() {
    const dishes = [
        { name: "Pizza", description: "Cheesy and delicious", price: "$12", image: "/Images/pizza.jpeg" },
        { name: "Burger", description: "Juicy and satisfying", price: "$10", image: "/Images/burger.jpg" },
        { name: "Pasta", description: "Creamy and flavorful", price: "$8", image: "/Images/thali.jpeg" },
        { name: "Pizza", description: "Cheesy and delicious", price: "$12", image: "/Images/pizza.jpeg" },
        { name: "Burger", description: "Juicy and satisfying", price: "$10", image: "/Images/burger.jpg" },
        { name: "Pasta", description: "Creamy and flavorful", price: "$8", image: "/Images/thali.jpeg" },
        
   
    ];

    return (
        <section className="menu" id="menu">
            <h2>Our Menu</h2>
            <div className="dishes">
                {dishes.map((dish, index) => (
                    <div className="dish" key={index}>
                        <img src={dish.image} alt={dish.name} className="dish-image" />
                        <h3>{dish.name}</h3>
                        <p>{dish.description}</p>
                        <p>{dish.price}</p>
                    </div>
                ))}
            </div>
            
        </section>
    );
}

export default Menu;
