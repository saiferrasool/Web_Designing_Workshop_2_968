import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div
    style={{
      textAlign: "center",
      padding: "20px",
    }}
  >
    <h1>Student Profile Dashboard</h1>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          width: "220px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "15px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="https://images.pexels.com/photos/8395504/pexels-photo-8395504.jpeg"
          alt="Student"
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
        <p><b>Name:</b>Rahul Sharma</p>
        <p><b>Course:</b>Btech-Cse</p>
        <p><b>Year</b>3rd year</p>
        <p><b>CGPA:</b>8.5</p>
      </div>

      {/* Card 2 */}
      <div
        style={{
          width: "220px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "15px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="https://images.pexels.com/photos/8395504/pexels-photo-8395504.jpeg"
          alt="Student"
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
        <p><b>Name:</b>Rahul Sharma</p>
        <p><b>Course:</b>Btech-Cse</p>
        <p><b>Year</b>3rd year</p>
        <p><b>CGPA:</b>8.5</p>
      </div>
    </div>
  </div>
);
}

export default App
