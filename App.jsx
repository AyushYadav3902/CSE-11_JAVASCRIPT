import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
 
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    parentContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#d3d3d3', // Matches the grey preview background
      fontFamily: 'Arial, sans-serif',
      flexDirection: 'column',
    },
    form: {
      width: '300px',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid black',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
      padding: '25px',
      boxSizing: 'border-box',
    },
    heading: {
      textAlign: 'center',
      color: '#0000ff', // Blue heading color
      marginBottom: '20px',
      marginTop: '0px',
    },
    input: {
      border: '1px solid #7a7a7a',
      borderRadius: '6px',
      padding: '10px',
      color: '#ff0000', // Red text color
      backgroundColor: '#ffff00', // Yellow background
      marginBottom: '15px',
      fontSize: '14px',
      outline: 'none',
    },
    button: {
      backgroundColor: isHovered ? '#0000b3' : '#0000ff', // Bonus: Hover effect shift
      color: '#ffffff', // White text
      borderRadius: '6px',
      padding: '10px',
      fontSize: '15px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
    },
    errorText: {
      color: 'red',
      fontSize: '13px',
      marginBottom: '10px',
      textAlign: 'center',
    },
    successText: {
      color: 'green',
      fontSize: '14px',
      fontWeight: 'bold',
      marginTop: '15px',
      textAlign: 'center',
    }
  };

  // --- Handlers ---
  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    // Bonus: Validate empty input fields
    if (!email.trim() || !password.trim()) {
      setError('Both Email and Password fields are required!');
      return;
    }

    // Bonus: Show success message after successful login validation
    setSuccessMessage('Login Successful!');
    setEmail('');
    setPassword('');
  };

  return (
    <div style={styles.parentContainer}>
      <form style={styles.form} onSubmit={handleLogin}>
        <h2 style={styles.heading}>Login Form</h2>
        
        {error && <div style={styles.errorText}>{error}</div>}

        <input 
          type="email" 
          placeholder="Enter Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        
        <input 
          type="password" 
          placeholder="Enter Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        
        <button 
          type="submit" 
          style={styles.button}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Login
        </button>
      </form>

      {successMessage && <div style={styles.successText}>{successMessage}</div>}
    </div>
  );
}

export default App;