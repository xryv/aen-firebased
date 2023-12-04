// pages/knowledge.js

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import FirebaseAuth from '@/components/auth/FirebaseAuth';
import Skills from '@/components/skills/Skills'; // Ensure the import path is correct
import Nav from '@/components/nav/Nav'; // Ensure the import path is correct
import styles from './knowledge.module.css'; // Adjust the path to your CSS module
import { useUser } from '@/lib/firebase/useUser';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Knowledge = () => {
  const { user, logout } = useUser();

  return (
    <div className={styles.container}>
      <Head>
        <title>Aethereal Knowledge</title>
        <meta name="description" content="Explore the Aethereal Knowledge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>Knowledge and Skills</h1>
        <Skills /> {/* Skills component included */}
      </main>

      <aside className={styles.loginContainer}>
        {user ? (
          <>
            <Card className={styles.profileCard}>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.email}</Card.Text>
                {user.profilePic ? (
                  <img src={user.profilePic} height={100} width={100} alt="Profile" />
                ) : (
                  <p>No profile pic</p>
                )}
                <div className={styles.profileActions}>
                  <Button onClick={logout} style={{ width: '100px' }}>Log Out</Button>
                  <Link href="/" passHref>
                    <Button variant="outline-secondary" style={{ width: '100px' }}>Back Home</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
            <Nav /> {/* Navigation component included */}
          </>
        ) : (
          <FirebaseAuth />
        )}
      </aside>

      <footer className={styles.footer}>
        <Link href="/">
          <a>Go back to home</a>
        </Link>
      </footer>
    </div>
  );
};

export default Knowledge;
