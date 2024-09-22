import React from 'react';
import './App.css'; // Import CSS file
import logo from './logo.svg'; // Import logo

function App() {
  const checkLinkedInConnection = () => {
    // Logic to check if user is connected on LinkedIn
    var connected = Math.random() < 0.00; // 5% chance of being connected
    var resultMessage = connected ? "Yes, you are connected with me on LinkedIn!" : "No, you are not connected with me on LinkedIn. Connect now: <a href='https://www.linkedin.com/in/muhammad-rashid-daha/' target='_blank'>Follow me on LinkedIn</a>";
    document.getElementById("result").innerHTML = resultMessage;
  }

  const subscribeToChannel = () => {
    // Redirect users to subscribe to the YouTube channel
    window.open('https://youtube.com/@codewithmuh?sub_confirmation=1', '_blank');
  }

  const toGithubRepo = () => {
    // Redirect users to subscribe to the YouTube channel
    window.open('https://github.com/codewithmuh/react-aws-ec2-nginx.git', '_blank');
  }

  return (
    <div className="App"> {/* Add class to center content */}
      <header>
        <h1>Welcome to <span>CodeWithMuh</span> Youtube Channel!</h1>
      </header>
      <main>
       
        <h2>Kavinda Piyumal</h2>

      </main>
      <footer>
        <p>&copy; 2024 <span>CodeWithMuh</span></p>
      </footer>
    </div>
  );
}

export default App;
