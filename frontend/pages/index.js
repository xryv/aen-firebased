// Importing necessary React and Next.js modules and components
import React, { useState } from 'react'; // React core and useState hook for state management
import Link from 'next/link'; // Next.js Link component for client-side navigation
import Head from 'next/head'; // Next.js Head component to modify the head of the page
import FirebaseAuth from '@/components/auth/FirebaseAuth'; // FirebaseAuth component for authentication
import styles from '../styles/Home.module.css'; // Importing CSS module for styling
import { useUser } from '@/lib/firebase/useUser'; // Custom hook for user authentication status
import Card from 'react-bootstrap/Card'; // React-Bootstrap Card component
import Button from 'react-bootstrap/Button'; // React-Bootstrap Button component
import { RenderExperiences } from '../components/ExperienceSymbols'; // Importing the RenderExperiences component
import ChatGptAgents from '../components/realtimeDatabase/ChatGptAgents'; // Importing ChatGptAgents component
import Dashboard from '@/components/Dashboard'; // Importing Dashboard component
import { getAuth, signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword } from 'firebase/auth'; // Firebase authentication functions
import Navbar from '@/components/nav/Navbar';

// Home component: Main page of the application
export default function Home() {
  const { user, logout } = useUser(); // Using useUser hook to manage user authentication state
  const [isLogin, setIsLogin] = useState(true); // State for toggling between login and signup modes
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input

  // Function to toggle between login and signup modes
  const toggleAuthMode = () => setIsLogin(!isLogin);

  // Function to handle email and password authentication
  const signInWithEmailAndPassword = async () => {
    const auth = getAuth(); // Getting Firebase auth instance
    try {
      await firebaseSignInWithEmailAndPassword(auth, email, password); // Attempt to sign in with email and password
      // Handle successful login here (e.g., redirect to dashboard or show success message)
    } catch (error) {
      console.error('Error signing in with email and password', error); // Log errors in the console
      // Handle errors here (e.g., show error message to the user)
    }
  };

  // JSX to render the UI of the page
  return (
    <div className={styles.container}>
      <Head>
        <title>Aethereal Nexus - Gateway to Specialized AI Experiences</title>
        {/* A more descriptive title helps with SEO and gives users a better idea of your site's purpose */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Ensures your page is responsive on all devices */}

        <meta charSet="utf-8" />
        {/* Sets the character encoding for the HTML document */}

        <link rel="icon" href="/favicon.ico" />
        {/* Favicon for brand recognition in browser tabs */}

        <meta name="description" content="Explore the Aethereal Nexus, a platform for specialized AI experiences, integrating cutting-edge ChatGPT technology for unique user interactions." />
        {/* A compelling description for SEO and preview snippets in search engines and social media */}

        <meta property="og:title" content="Aethereal Nexus - Gateway to Specialized AI Experiences" />
        <meta property="og:description" content="Dive into the world of Aethereal Nexus and discover how AI can transform your digital interactions." />
        <meta property="og:image" content="../public/logo.svg" />
        <meta property="og:url" content="https://aethereal.nexus" />
        {/* Open Graph tags for social media previews */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="aetherea.lnexus" />
        <meta property="twitter:url" content="https://aethereal.nexus" />
        <meta name="twitter:title" content="Aethereal Nexus - Gateway to Specialized AI Experiences" />
        <meta name="twitter:description" content="Join Aethereal Nexus and experience the future of AI-driven digital interaction." />
        <meta name="twitter:image" content="../public/logo.svg" />
        {/* Twitter card tags to optimize sharing on Twitter with a preview image and description */}

        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css" 
        />
        {/* Bootstrap icons for enhanced UI elements */}

        <link rel="preload" as="image" href="../public/logo.svg" />
        {/* Preload important images to improve loading performance */}
      </Head>



      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>AETHEREAL 77 NEXUS</h1> {/* Main title */}
        <h2 className={styles.subTitle}>The Gateway to Specialized AI Experiences</h2> {/* Subtitle */}
        <p className={styles.smallText}>Endless Possibilities</p> {/* Additional text */}

        <Navbar /> {/* Include the Navbar component */}


        {/* Call-to-action link */}
        <div className={styles.cta}>
          <Link href="/Dashboard">
            <a className={styles.ctaLink}>Uncover the potential of our ChatGPT Agents →</a>
          </Link>
        </div>
      </main>

      <aside className={styles.loginContainer}>
        {user ? (
          // Rendering user profile and Dashboard if the user is logged in
          <>
            <Card className={styles.profileCard}>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title> {/* User's name */}
                <Card.Text>{user.email}</Card.Text> {/* User's email */}
                {RenderExperiences()} {/* Rendering the experiences symbols */}
                <hr />
                {user.profilePic ? 
                  <img src={user.profilePic} height={100} width={100} alt="Profile" /> 
                  : <p>No profile pic</p>} {/* Displaying user's profile picture if available */}
                <hr />
                <div className={styles.profileActions}>
                  <Button onClick={() => logout()} style={{ width: '100px' }}>Log Out</Button> {/* Logout button */}
                  <a href="https://aethereal.nexus/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-secondary" style={{ width: '100px' }}>Back Home</Button> {/* Button to navigate back home */}
                  </a>
                </div>
              </Card.Body>
            </Card>
            <Dashboard user={user} /> {/* Render the Dashboard component */}
          </>
        ) : (
          // Login/signup form or Firebase UI for authentication
          <>
            {isLogin ? (
              // Email/password login form
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email" // Email input field
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password" // Password input field
                />
                <button onClick={signInWithEmailAndPassword}>Log In</button> {/* Login button */}
              </div>
            ) : (
              // Firebase UI for registration and other authentication methods
              <FirebaseAuth />
            )}
            <button onClick={toggleAuthMode} className={styles.toggleAuthModeButton}>
              {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'} {/* Button to toggle between login and signup */}
            </button>
          </>
        )}
        <h5 className={styles.smallText}>!!!</h5>
        <h5 className={styles.smallText}>THIS PROJECT IS UNDER DEVELOPMENT</h5> {/* Development warning */}
        <h5 className={styles.smallText}>USE, AT YOUR OWN RISK</h5> {/* Disclaimer */}
      </aside>
    </div>
  );
}
