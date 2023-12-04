//aen-website\pages\index.js

import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import FirebaseAuth from '@/components/auth/FirebaseAuth';
import styles from '../styles/Home.module.css';
import { useUser } from '@/lib/firebase/useUser';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { RenderExperiences } from '../components/ExperienceSymbols-old';
import ChatGptAgents from '../components/realtimeDatabase/ChatGptAgents';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const { user, logout } = useUser();
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and sign up

  const toggleAuthMode = () => setIsLogin(!isLogin);

  return (
    <div className={styles.container}>
      <Head>
        <title>Aethereal Nexus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>AETHEREAL NEXUS</h1>
        <h2 className={styles.subTitle}>The Gateway to Specialized AI Experiences</h2>
        <p className={styles.smallText}>
          Endless Possibilities
        </p>
        {/* this is call-to-action link */}
        <div className={styles.cta}>
          <Link href="\components\Dashboard">
            <a className={styles.ctaLink}>Uncover the potential of our ChatGPT Agents →</a>
          </Link>
        </div>
      </main>

      <aside className={styles.loginContainer}>
        {user ? (
          <>
            <Card className={styles.profileCard}>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.email}</Card.Text>
                {RenderExperiences()}
                <hr />
                {user.profilePic ? <img src={user.profilePic} height={100} width={100} alt="Profile" /> : <p>No profile pic</p>}
                <hr />
                <div className={styles.profileActions}>
                  <Button onClick={() => logout()} style={{ width: '100px' }}>Log Out</Button>
                  <a href="https://aethereal.nexus/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-secondary" style={{ width: '100px' }}>Back Home</Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
            <Dashboard user={user} /> {/* Render the Dashboard component */}
          </>
        ) : (
          <>
            <FirebaseAuth isLogin={isLogin} />
            <button onClick={toggleAuthMode} className={styles.toggleAuthModeButton}>
              {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
            </button>
          </>
        )}
        <h5 className={styles.smallText}>!!!</h5>
        <h5 className={styles.smallText}>THIS PROJECT IS UNDER DEVELOPMENT</h5>
        <h5 className={styles.smallText}>USE, AT YOUR OWN RISK</h5>
      </aside>
    </div>
  );
}
