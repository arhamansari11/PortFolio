import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Oops! Something went wrong.</h1>
      <p style={styles.message}>The page you're looking for doesn't exist or an error occurred.</p>
      <Link to="/" style={styles.link}>Go back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    color: '#343a40',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
  },
  link: {
    fontSize: '1.25rem',
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default Error;
