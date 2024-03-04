import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';

function App() {
    return (
        <div className="App">
            <Navbar />
            <h1>CS 230L</h1>
            <h2>Section - 01</h2>
            <p>WVU ID: 800380087</p>
            <p>Hi, I am Nada Mikky</p>
            <div className="card-container">
                <Card title="Card 01" color="blue" />
                <Card title="Card 02" color="red" />
                <Card title="Card 03" color="green" />
            </div>
        </div>
    );
}

export default App;
