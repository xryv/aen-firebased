// pages/agents.js

import Head from 'next/head';
import styles from '../styles/Agents.module.css'; // Ensure you have this CSS module for styling
import ChatGptAgents from '../components/realtimeDatabase/ChatGptAgents';

export default function Agents() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChatGPT Agents - Aethereal Nexus</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Discover Our ChatGPT Agents</h1>
        <ChatGptAgents />
      </main>
    </div>
  );
}
