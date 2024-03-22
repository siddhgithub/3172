import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App!</h1>
        <p>Enjoy exploring the features.</p>
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>We are a team of developers passionate about React.</p>
        </section>
        <section>
          <h2>Features</h2>
          <ul>
            <li>Responsive design</li>
            <li>Modern UI</li>
            <li>Easy navigation</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My React App</p>
      </footer>
    </div>
  );
}

export default App;
