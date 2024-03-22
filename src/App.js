import React from 'react';
import './App.css';
import image1 from './images/image1.jpeg';

function App() {
  return (
    <div className="App">
      <header className="head">
        <h1>Welcome to My React App!</h1>
        <p>Enjoy exploring the features.</p>
        <img src={image1}alt="Placeholder" />
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>We are a team of developers passionate about React.</p>
        </section>
        <div className="drop">
          <button className="dropbtn">Select Category</button>
          <div className="dropdown">
            <button >Landscape</button>
            <button >Portraits</button>
            <button >Nature</button>
          </div>
        </div>
        <section className="about">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula mi eget ligula dictum, sed sodales augue ultrices.</p>
        </section>
        <section className="contact">
          <h2>Contact Me</h2>
          <p>Email: lec@gmail.com</p>
          <p>Phone: 123-456-789</p>
        </section>
      </main>

    </div>
  );
}

export default App;
