import { useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useUser } from '@/lib/firebase/useUser';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Home() {
  const { user, logout } = useUser();

  const ExperienceSymbol = ({ title, svgPath, href }) => (
    <Link href={href} passHref>
      <a className={styles.symbolContainer}>
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={svgPath} className={styles.symbol}></path>
        </svg>
        <div className={styles.symbolTitle}>{title}</div>
      </a>
    </Link>
  );

  const renderExperiences = () => (
    <div className={styles.symbolsWrapper}>
      <ExperienceSymbol 
        title="Knowledge"
        svgPath="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        href="/knowledge/knowledge"
      />
      <ExperienceSymbol 
        title="Economy"
        svgPath="M12 2l6.627 11.5H5.373L12 2zm0 4.33L8.535 11h6.93L12 6.33zM5 14h14l-7 12-7-12z"
        href="/economy"
      />
      <ExperienceSymbol 
        title="Avatar"
        svgPath="M12 2L2 8.5 12 15 22 8.5 12 2z"
        href="/avatar"
      />
      <ExperienceSymbol 
        title="Foundation"
        svgPath="M4 4h16v16H4V4z"
        href="/foundation"
      />
    </div>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Aethereal Nexus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>AETHEREAL NEXUS</h1>
        <h2 className={styles.subTitle}>EXPERIENCE</h2>
        <p className={styles.smallText}>an unique ever seen piece of art</p>
        {renderExperiences()}
      </main>
      {user ? (
        <>
          <Card className={styles.profileCard}>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.email}</Card.Text>
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
        </>
      ) : (
        <p className={styles.loginPrompt}><a href="/auth">Log In!</a></p>
      )}
    </div>
  );
}
