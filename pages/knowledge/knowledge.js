// pages/knowledge.js

import Image from 'next/image';
import styles from './Knowledge.module.css'; // Ensure you have this CSS module
import Link from 'next/link';
import Head from 'next/head';

// Import images (assuming static imports for simplicity)
// Import images directly from the current directory within the knowledge subdirectory
import artDesign from './ArtDesign.png';
import cookingCulinary from './CookingCulinaryTechniques.png';
import culturalHistorical from './CulturalHistoricalTidbits.png';
import digitalSkills from './DigitalSkillsTechTutorials.png';
import diyCrafts from './DIYCrafts.png';
import financeInvestments from './FinanceInvestments.png';
import mentalHealthMindfulness from './MentalHealthMindfulness.png';
import sportsFitness from './SportsFitness.png';
import sustainabilityEnvironment from './SustainabilityEnvironment.png';
import travelExploration from './TravelExploration.png';


// ... rest of your code ...


// Array of all images and titles
const skills = [
  { src: artDesign, title: 'Art & Design' },
  { src: cookingCulinary, title: 'Cooking & Culinary Techniques' },
  { src: culturalHistorical, title: 'Cultural & Historical Tidbits' },
  { src: digitalSkills, title: 'Digital Skills & Tech Tutorials' },
  { src: diyCrafts, title: 'DIY & Crafts' },
  { src: financeInvestments, title: 'Finance & Investments' },
  { src: mentalHealthMindfulness, title: 'Mental Health & Mindfulness' },
  { src: sportsFitness, title: 'Sports & Fitness' },
  { src: sustainabilityEnvironment, title: 'Sustainability & Environment' },
  { src: travelExploration, title: 'Travel & Exploration' },
];

export default function Knowledge() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aethereal Knowledge</title>
        <meta name="description" content="Explore the Aethereal Knowledge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Knowledge and Skills</h1>
        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.card}>
              <Image src={skill.src} alt={skill.title} width={150} height={150} layout="responsive" />
              <p className={styles.cardTitle}>{skill.title}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="/">
          <a>Go back to home</a>
        </Link>
      </footer>
    </div>
  );
}